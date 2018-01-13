<script>
import { RxBoardMixin } from '@robotx/packages'

// 导航菜单
const routes = [
  {
    title: 'Home',
    name: 'homepage'
  },
  {
    title: 'Products',
    children: [
      {
        title: 'products',
        name: 'products'
      },
      {
        title: 'Categories',
        name: 'productCategories'
      }
    ]
  }
]

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
