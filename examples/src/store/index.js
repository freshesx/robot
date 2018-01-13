import Vue from 'vue'
import Vuex from 'vuex'
import { robotxStore } from '@robotx/packages'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    robotxStore
  },
  strict: process.env.NODE_ENV !== 'production'
})
