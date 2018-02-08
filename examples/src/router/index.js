import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../components/dashboard/router.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    ...dashboard
  ]
})

export default router
