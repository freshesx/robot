import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../components/dashboard/router.js'
import sign from '../components/sign/router.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    ...dashboard,
    ...sign
  ]
})

export default router
