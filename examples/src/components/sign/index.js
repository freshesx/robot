import { Bundle } from '@freshes/robot'

const routes = [
  {
    path: '/sign/in',
    name: 'sign.in',
    component: () => import('./in.js')
  }
  // {
  //   path: '/sign/up',
  //   name: 'sign.up',
  //   component: () => import('./up.js')
  // }
]

export default new Bundle('sign', {
  routes
})
