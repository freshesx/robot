import Vue from 'vue'
import mix from '../../helpers/mix.js'
import {
  Container as ElContainer,
  Main as ElMain,
  Aside as ElAside,
  Menu as ElMenu,
  MenuItem as ElMenuItem,
  Submenu as ElSubmenu } from 'element-ui'

const Dashboard = {
  name: 'RtDashboard',
  render (h) {
    const RouterView = Vue.component('router-view')

    return (
      <div class='rt-dashboard'>
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
      return (
        <ElAside class='rt-dashboard__aside' width={this.asideWidth} style='transition: width 0.5s;'>
          <div class='rt-dashboard__brand'>
            ROBOT
          </div>
          <div class='rt-dashboard__menu'>
            {this.renderMenu(h)}
          </div>
          <div class='rt-dashboard__collapse'>
            <i class='el-icon-menu' onClick={this.toggleCollapse} />
          </div>
        </ElAside>
      )
    },
    renderMenu (h) {
      return (
        <ElMenu
          defaultActive='1'
          backgroundColor='#001529'
          textColor='#A6ADB4'
          activeTextColor='#fff'
          collapse={this.collapse}
          uniqueOpened
        >
          {(
            this.menu.map(item => {
              return item.children
                ? this.renderSubmenu(h, item)
                : this.renderItem(h, item)
            })
          )}
        </ElMenu>
      )
    },
    renderItem (h, item) {
      return (
        <ElMenuItem index={item.id.toString()}>
          <i class={{ [item.icon]: true }} />
          <span slot='title'>{item.title}</span>
        </ElMenuItem>
      )
    },
    renderSubmenu (h, item) {
      return (
        <ElSubmenu index={item.id.toString()}>
          <template slot='title'>
            <i class={{ [item.icon]: true }} />
            <span slot='title'>{item.title}</span>
          </template>
          {(
            item.children.map(child => {
              return this.renderItem(h, child)
            })
          )}
        </ElSubmenu>
      )
    },
    toggleCollapse () {
      this.$store.commit('$robotSetMenuCollapse')
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
    menuCollapse () {
      return this.$store.state.$robot.menuCollapse
    },
    asideWidth () {
      return this.menuCollapse ? '64px' : '200px'
    }
  }
}

export default config => mix(Dashboard, config)
