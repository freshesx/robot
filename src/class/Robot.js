// @flow

import type { ModuleInterface, BundleHandlerInterface } from './ModuleInterface.js'
import mapRobotStore from '../helpers/mapRobotStore.js'
import Vue from 'vue'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import '../scss/reset.css'
import '../scss/style.scss'
import '../mixins/dashboard/main.scss'

export default class Robot {
  bundleHandler: BundleHandlerInterface

  constructor (bundles: { [string]: ModuleInterface }) {
    this.Vue = Vue
  }

  renderApp () {
    const RouterView = this.Vue.component('router-view')

    return {
      render (h) {
        return <RouterView />
      }
    }
  }

  render ({ routes, strict }) {
    this.Vue.config.productionTip = strict

    this.Vue.use(ElementUI)
    this.Vue.use(Vuex)
    this.Vue.use(VueRouter)

    const store = new Vuex.Store({
      strict,
      modules: {
        ...mapRobotStore()
      }
    })

    const router = new VueRouter({
      routes: [
        ...routes
      ]
    })

    new this.Vue({
      el: '#app',
      store,
      router,
      render: h => h(this.renderApp())
    })
  }
}
