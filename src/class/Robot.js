// @flow

import type { ModuleInterface } from './ModuleInterface.js'
import mapRobotStore from '../helpers/mapRobotStore.js'
import Vue from 'vue'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import '../scss/reset.css'
import '../scss/style.scss'
import '../mixins/dashboard/main.scss'

export default class Robot {
  constructor (modules: { [string]: ModuleInterface }) {
    this.modules = modules
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

  parseModules () {
    let storeModules = {}
    let routeModules = []

    for (const name in this.modules) {
      if (this.modules.hasOwnProperty(name)) {
        storeModules[name] = {
          state: this.modules[name].state,
          mutations: this.modules[name].commits
        }
        routeModules = [
          ...routeModules,
          ...this.modules[name].routes
        ]
      }
    }

    return {
      storeModules,
      routeModules
    }
  }

  render ({ strict }) {
    this.Vue.config.productionTip = strict

    this.Vue.use(ElementUI)
    this.Vue.use(Vuex)
    this.Vue.use(VueRouter)

    const { storeModules, routeModules } = this.parseModules()

    const store = new Vuex.Store({
      strict,
      modules: {
        ...storeModules,
        ...mapRobotStore()
      }
    })

    const router = new VueRouter({
      routes: [
        ...routeModules
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
