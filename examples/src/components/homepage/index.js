import { Bundle } from '@freshes/robot'

export const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () => import('./list.js')
  }
]

export default new Bundle()
