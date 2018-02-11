import homepage from '../homepage/router.js'
import products from '../products/router.js'

// @todo 定义一个新的 router 类，用于控制输入
export default [
  {
    path: '/dashboard',
    component: () => import('./list.js'),
    children: [
      ...homepage,
      ...products
    ]
  }
]
