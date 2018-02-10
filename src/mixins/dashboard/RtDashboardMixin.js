import Vue from 'vue'
import Menu from './_menu.js'

export default {
  name: 'RtDashboardMixin',
  render (h) {
    const ElContainer = Vue.component('ElContainer')
    const ElMain = Vue.component('ElMain')
    const RouterView = Vue.component('router-view')

    return (
      <div class='rt-dashboard-mixin'>
        <ElContainer>
          {this.renderAside(h)}
          <ElMain>
            <RouterView />
          </ElMain>
        </ElContainer>
      </div>
    )
  },
  methods: {
    renderAside (h) {
      const ElAside = Vue.component('ElAside')

      return (
        <ElAside class='rt-dashboard-mixin__aside' width={this.asideWidth} style='transition: width 0.5s;'>
          <div class='rt-dashboard-mixin__brand'>
            ROBOT
          </div>
          <div class='rt-dashboard-mixin__menu'>
            <Menu menu={this.menu} collapse={this.menuCollapse} />
          </div>
          <div class='rt-dashboard-mixin__collapse'>
            <i class='el-icon-menu' onClick={this.toggleCollapse} />
          </div>
        </ElAside>
      )
    },
    toggleCollapse () {
      this.menuCollapse = !this.menuCollapse
    }
  },
  data () {
    return {
      collapseData: false
    }
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
    /**
     * @public
     */
    menuCollapse: {
      get () {
        return this.collapseData
      },
      set (value) {
        this.collapseData = value
      }
    },
    asideWidth () {
      return this.menuCollapse ? '64px' : '200px'
    }
  }
}
