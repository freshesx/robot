import Vue from 'vue'
import Vuex from 'vuex'
import { mapRobotStore } from '@freshes/robot'
import dashboard from '../components/dashboard/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    dashboard,
    ...mapRobotStore()
  }
})

export default store
