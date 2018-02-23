import homepage from '../homepage/routes.js'
import products from '../products/routes.js'
import setting from '../setting/routes.js'

export default [
  {
    path: '/dashboard',
    component: () => import('./index.js'),
    children: [
      ...homepage,
      ...products,
      ...setting
    ]
  }
]
