import { mixDashboard } from '@freshes/robot'

export default mixDashboard({
  input: {
    // menu: '$store.state.dashboard.menu',
    structure () {
      return 'hihi'
    }
  },
  output: {
    update () {
    }
  },
  hooks: {
    created () {
      console.log(this.structure)
    }
  }
})
