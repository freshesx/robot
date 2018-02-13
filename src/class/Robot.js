// @flow

import type { ModuleInterface, BundleHandlerInterface } from './ModuleInterface.js'
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import { observable, isObservable, toJS } from 'mobx'
import VueMobx from 'vue-mobx'
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
    this.Vue.use(VueRouter)

    this.Vue.use(VueMobx, {
      toJS: toJS,
      isObservable: isObservable,
      observable: observable
    })

    const router = new VueRouter({
      routes: [
        ...routes
      ]
    })

    new this.Vue({
      el: '#app',
      router,
      render: h => h(this.renderApp())
    })
  }
}
