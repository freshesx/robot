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
          collapse={this.menuCollapse}
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
        <MenuItem index={item.id.toString()} onClick={event => this.clickMenuItem(event, item)}>
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
      this.setState('$robot.menuCollapse', value => !value)
    },
    /**
     * @public
     * @param {VueEvent} event
     * @param {Object} item - route item
     */
    clickMenuItem (event, item) {
      this.$router.push(item.router)
    }
  },
  computed: {
    /**
     * @public
     */
    menu () {
      return []
    },
    /**
     * @public
     */
    menuCollapse () {
      return this.getState('$robot.menuCollapse')
    },
    asideWidth () {
      return this.menuCollapse ? '64px' : '200px'
    }
  }
}

export default config => mix(Dashboard, config)
