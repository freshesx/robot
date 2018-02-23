import { mixDashboard } from '@freshes/robot'
import menu from './menu.js'

export default mixDashboard({
  computed: {
    menu: () => menu
  }
})
