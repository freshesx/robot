export default [
  {
    path: '/',
    name: 'homepage',
    meta: {
      title: 'Homepage',
      nav: true
    },
    component: () => import('../components/home')
  },
  {
    path: 'products',
    name: 'products',
    meta: {
      title: 'Products',
      nav: true
    },
    component: () => import('../components/products/index.vue')
  },
  {
    path: 'products/:productId/edit',
    name: 'products.edit',
    meta: {
      title: 'Edit Product'
    },
    component: () => import('../components/products/edit.vue')
  },
  {
    path: 'product-categories',
    name: 'productCategories',
    meta: {
      title: 'Product Categories',
      nav: true
    },
    component: () => import('../components/product-categories/index.vue')
  }
]
