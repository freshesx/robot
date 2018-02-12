// @flow

import type { ModuleInterface, BundleHandlerInterface } from './ModuleInterface.js'
import BundleHandler from './BundleHandler.js'
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
    // this.modules = modules
    this.Vue = Vue

    // 计算 modules，放入 bundleHandler 处理
    this.bundleHandler = new BundleHandler(bundles)
  }

  renderApp () {
    const RouterView = this.Vue.component('router-view')

    return {
      render (h) {
        return <RouterView />
      }
    }
  }

  render ({ strict }) {
    this.Vue.config.productionTip = strict

    this.Vue.use(ElementUI)
    this.Vue.use(Vuex)
    this.Vue.use(VueRouter)

    const store = new Vuex.Store({
      strict,
      modules: {
        ...this.bundleHandler.storeMaps,
        ...mapRobotStore()
      }
    })

    const router = new VueRouter({
      routes: [
        ...this.bundleHandler.routeModules
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
