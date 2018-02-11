import { Module } from '@freshes/robot'
import homepage from '../homepage/router.js'
import products from '../products/router.js'
import menu from './menu.js'

export default new Module({
  state: {
    menu
  },
  commits: {
    setMenu (state, props) {
      state.menu = { ...state.menu, ...props }
    }
  },
  routes: [
    {
      path: '/dashboard',
      component: () => import('./list.js'),
      children: [
        ...homepage,
        ...products
      ]
    }
  ]
})
