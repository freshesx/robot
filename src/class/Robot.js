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

    const robotModule = this.parseState(mapRobotStore())

    return new Vuex.Store({
      modules: {
        ...robotModule
      },
      strict: this.strict
    })
  }

  buildHelpers () {
    this.Vue.prototype.$r = this.Vue.prototype.getState = function (name, defaultValue) {
      return get(this.$store.state, name, defaultValue)
    }

    this.Vue.prototype.$w = this.Vue.prototype.setState = function (name, newValue) {
      console.log('hihihihihi')
      return this.$store.commit(name, newValue)
    }
  }

  parseState (modules) {
    let newModules = {}

    Object.keys(modules).forEach(name => {
      const m = modules[name]
      const o = {
        state: m.state,
        mutations: this.parseMutations(m.state, name)
      }
      newModules = { ...newModules, ...{ [name]: o } }
    })

    return newModules
  }
  
  parseMutations (states, prefix) {
    let newMutations = {}

    Object.keys(states).forEach(name => {
      const fn = function (state, props) {
        state[name] = props
      }
      newMutations = { ...newMutations, ...{ [`${prefix}.${name}`]: fn } }
    })

    return newMutations
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
