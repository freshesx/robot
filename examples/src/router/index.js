import Vue from 'vue'
import VueRouter from 'vue-router'
import board from './board'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/board',
      component: () => import('../components/board'),
      children: board
    }
  ]
})

export default router
