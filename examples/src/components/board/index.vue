<script>
import { RxBoardMixin, SessionRouter } from '@robotx/packages'
import homePage from '../home'
import productsPage from '../products'
import productCategoriesPage from '../product-categories'

// 导航菜单
const routes = [
  {
    title: 'Home',
    name: 'homepage',
    component: homePage
  },
  {
    title: 'Products',
    children: [
      {
        title: 'products',
        name: 'products',
        component: productsPage
      },
      {
        title: 'Categories',
        name: 'productCategories',
        component: productCategoriesPage
      }
    ]
  }
]

SessionRouter.routes(routes)

export default {
  mixins: [
    RxBoardMixin
  ],
  data () {
    return {
      routes
    }
  }
}
</script>
