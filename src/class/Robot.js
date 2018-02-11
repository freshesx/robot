// @flow

import type { ModuleInterface } from './ModuleInterface.js'
import mapRobotStore from '../helpers/mapRobotStore.js'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import '../scss/reset.css'
import '../scss/style.scss'
import '../mixins/dashboard/main.scss'

export default class Robot {
  constructor (modules: { [string]: ModuleInterface }) {
    this.modules = modules
  }

  renderApp (Vue) {
    const RouterView = Vue.component('router-view')

    return {
      render (h) {
        return <RouterView />
      }
    }
  }

  install (Vue, Options) {
    Vue.use(ElementUI)
  }

  render (Vue, App) {
    const storeModules = {}
    // const routerModules = []

    for (const name in this.modules) {
      if (this.modules.hasOwnProperty(name)) {
        storeModules[name] = {
          state: this.modules[name].state,
          mutations: this.modules[name].commits
        }
      }
    }

    let storeRouters = []

    for (const name in this.modules) {
      if (this.modules.hasOwnProperty(name)) {
        console.log(this.modules[name])
        storeRouters = storeRouters.concat(this.modules[name].routes)
      }
    }

    // install robot
    Vue.use(this)

    Vue.use(Vuex)

    const store = new Vuex.Store({
      // strict: process.env.NODE_ENV !== 'production',
      modules: {
        ...storeModules,
        ...mapRobotStore()
      }
    })

    Vue.use(VueRouter)

    const router = new VueRouter({
      routes: [
        ...storeRouters
      ]
    })

    new Vue({
      el: '#app',
      store,
      router,
      render: h => h(App || this.renderApp(Vue))
    })
  }
}
