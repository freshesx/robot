import { Bundle } from '@freshes/robot'
import homepage from '../homepage/router.js'
import products from '../products/router.js'
import menu from './menu.js'

const state = {
  menu
}

const mutations = {
  setMenu (state, props) {
    state.menu = { ...state.menu, ...props }
  }
}

const routes = [
  {
    path: '/dashboard',
    component: () => import('./list.js'),
    children: [
      ...homepage,
      ...products
    ]
  }
]

export default new Bundle({
  routes,
  state,
  mutations
})
