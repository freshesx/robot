import { mixDashboard } from '@freshes/robot'

export default mixDashboard({
  input: {
    menu () {
      return this.$store.state.dashboard.menu
    }
  },
  output: {
    update () {
    }
  },
  lifecycle: {
    created () {
    }
  }
})
