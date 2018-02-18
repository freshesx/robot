// @flow

import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import '../scss/reset.css'
import '../scss/style.scss'
import '../mixins/dashboard/main.scss'
import mapRobotStore from '../helpers/mapRobotStore.js'
import get from 'lodash/get'

export default class Robot {
  constructor ({ modules, strict }) {
    this.modules = modules
    this.strict = strict
  }

  install (Vue) {
    this.Vue = Vue
    this.Vue.config.productionTip = this.strict

    this.Vue.use(ElementUI)

    const store = this.buildStore()
    const router = this.buildRouter()
    this.buildHelpers()

    new this.Vue({
      el: '#app',
      store,
      router,
      render: h => h(this.renderApp())
    })
  }

  buildRouter () {
    this.Vue.use(VueRouter)

    let routes = []

    for (const name in this.modules) {
      if (this.modules.hasOwnProperty(name)) {
        const m = this.modules[name]
        routes = [ ...routes, ...m.routes ]
      }
    }

    return new VueRouter({
      routes: [
        ...routes
      ]
    })
  }

  buildStore () {
    this.Vue.use(Vuex)

    return new Vuex.Store({
      modules: {
        ...mapRobotStore()
      },
      strict: this.strict
    })
  }

  buildHelpers () {
    this.Vue.prototype.getState = function (name, defaultValue) {
      return get(this.$store.state, name, defaultValue)
    }
  }

  renderApp () {
    const RouterView = this.Vue.component('router-view')

    return {
      render (h) {
        return <RouterView />
      }
    }
  }
}
