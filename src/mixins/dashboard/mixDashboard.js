import Vue from 'vue'
import Menu from './_menu.js'
import mix from '../../helpers/mix.js'
import {
  Container as ElContainer,
  Main as ElMain,
  Aside as ElAside } from 'element-ui'

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
            <Menu menu={this.menu} collapse={this.menuCollapse} />
          </div>
          <div class='rt-dashboard__collapse'>
            <i class='el-icon-menu' onClick={this.toggleCollapse} />
          </div>
        </ElAside>
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

export default config => mix(config, Dashboard)
