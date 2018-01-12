export default [
  {
    path: '/',
    name: 'homepage',
    meta: {
      title: '首页'
      // hidden: true
    },
    component: () => import('../components/home')
  },
  {
    path: 'products',
    name: 'products',
    meta: {
      title: '产品'
    },
    component: () => import('../components/products'),
    children: [
      {
        path: ':productId/edit',
        name: 'products.edit',
        meta: {
          title: '编辑商品'
        },
        component: () => import('../components/products/edit.vue')
      }
    ]
  }
]
