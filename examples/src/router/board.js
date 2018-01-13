export default [
  {
    path: '/',
    name: 'homepage',
    meta: {
      title: '首页'
    },
    component: () => import('../components/home')
  },
  {
    path: 'products',
    meta: {
      title: '产品'
    },
    component: () => import('../components/products'),
    children: [
      {
        path: '/',
        name: 'products.list',
        meta: {
          title: '产品列表'
        },
        component: () => import('../components/products/list.vue')
      },
      {
        path: ':productId/edit',
        name: 'products.edit',
        meta: {
          title: '编辑产品'
        },
        component: () => import('../components/products/edit.vue')
      }
    ]
  }
]
