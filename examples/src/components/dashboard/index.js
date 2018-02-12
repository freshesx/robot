import { Bundle } from '@freshes/robot'
import { routes as homepage } from '../homepage'
import { routes as products } from '../products'
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

export default new Bundle('dashboard', {
  routes,
  state,
  mutations
})
