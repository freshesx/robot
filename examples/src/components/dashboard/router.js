import homepage from '../homepage/router.js'
import products from '../products/router.js'

export default [
  {
    path: '/dashboard',
    component: () => import('./index.js'),
    children: [
      ...homepage,
      ...products
    ]
  }
]
