import {
  Menu as ElMenu,
  MenuItem as ElMenuItem,
  Submenu as ElSubmenu } from 'element-ui'

export default {
  name: 'RtDashboardMenu',
  props: {
    menu: {
      type: Array,
      default: () => []
    },
    collapse: {
      type: Boolean,
      default: false
    }
  },
  render (h) {
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
  methods: {
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
    }
  }
}
