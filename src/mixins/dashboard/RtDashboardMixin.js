import Vue from 'vue'
import PrivateAside from './_aside.vue'

export default {
  name: 'RtDashboardMixin',
  components: {
    PrivateAside
  },
  render (h) {
    const ElAside = Vue.component('ElAside')
    const ElContainer = Vue.component('ElContainer')
    const ElMain = Vue.component('ElMain')
    const RouterView = Vue.component('router-view')

    return (
      <div class='rt-dashboard-mixin'>
        <ElContainer>
          <ElAside class='rt-dashboard-mixin-aside' width={this.asideWidth}>
            {/* 侧边栏元素 */}
            <private-aside menu={this.menu} collapse={this.menuCollapse} />
          </ElAside>
          <ElMain>
            <RouterView />
          </ElMain>
        </ElContainer>
      </div>
    )
  },
  computed: {
    /**
     * @public
     */
    menu () {
      return [
        {
          id: 1,
          title: '首页',
          router: { name: 'homepage' },
          icon: 'el-icon-menu'
        },
        {
          id: 2,
          title: '产品模块',
          icon: 'el-icon-tickets',
          children: [
            {
              id: 3,
              title: '产品列表',
              router: { name: 'products' }
            }
          ]
        },
        {
          id: 4,
          title: '用户模块',
          router: { name: 'homepage' },
          icon: 'el-icon-setting'
        }
      ]
    },
    menuCollapse () {
      return false
    },
    asideWidth () {
      return this.menuCollapse ? '64px' : '200px'
    }
  }
}
