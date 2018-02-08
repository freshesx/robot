import { mixDashboard } from '@freshes/robot'

export default mixDashboard({
  input: {
    structure () {
      return 'hello, world'
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
