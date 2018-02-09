import Vue from 'vue'

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
  data () {
    return {
      data: 'nihao2'
    }
  },
  render (h) {
    const ElMenu = Vue.component('ElMenu')

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
      const ElMenuItem = Vue.component('ElMenuItem')

      return (
        <ElMenuItem index={item.id.toString()}>
          <i class={{ [item.icon]: true }} />
          <span slot='title'>{item.title}</span>
        </ElMenuItem>
      )
    },
    renderSubmenu (h, item) {
      const ElSubmenu = Vue.component('ElSubmenu')

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
