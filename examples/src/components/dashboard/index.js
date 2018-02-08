import { mixDashboard } from '@freshes/robot'

export default mixDashboard({
  input: {
    structure () {
      return 'hihi'
    }
  },
  output: {
    update () {
    }
  },
  lifecycle: {
    created () {
      console.log(this.structure)
    }
  }
})
