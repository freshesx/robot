import Vue from 'vue'
import mix from '../../helpers/mix.js'
import {
  Container,
  Main,
  Aside,
  Menu,
  MenuItem,
  Submenu
} from 'element-ui'

const Dashboard = {
  name: 'RtDashboard',
  render (h) {
    const RouterView = Vue.component('router-view')

    return (
      <div class='rt-dashboard'>
        <Container>
          {this.renderAside(h)}
          <Main>
            <RouterView />
          </Main>
        </Container>
      </div>
    )
  },
  methods: {
    renderAside (h) {
      return (
        <Aside class='rt-dashboard__aside' width={this.asideWidth} style='transition: width 0.5s;'>
          <div class='rt-dashboard__brand'>
            ROBOT
          </div>
          <div class='rt-dashboard__menu'>
            {this.renderMenu(h)}
          </div>
          <div class='rt-dashboard__collapse'>
            <i class='el-icon-menu' onClick={this.toggleCollapse} />
          </div>
        </Aside>
      )
    },
    renderMenu (h) {
      return (
        <Menu
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
        </Menu>
      )
    },
    renderItem (h, item) {
      return (
        <MenuItem index={item.id.toString()} onClick={this.clickMenuItem}>
          <i class={{ [item.icon]: true }} />
          <span slot='title'>{item.title}</span>
        </MenuItem>
      )
    },
    renderSubmenu (h, item) {
      return (
        <Submenu index={item.id.toString()}>
          <template slot='title'>
            <i class={{ [item.icon]: true }} />
            <span slot='title'>{item.title}</span>
          </template>
          {(
            item.children.map(child => {
              return this.renderItem(h, child)
            })
          )}
        </Submenu>
      )
    },
    toggleCollapse () {
      this.$store.commit('$robotSetMenuCollapse')
    },
    /**
     * @public
     * @param {VueEvent} event
     */
    clickMenuItem (event) {
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
