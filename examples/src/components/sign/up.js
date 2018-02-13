import { mixTextInput } from '@freshes/robot'

mixTextInput({
  computed: {
    value () {
      return this.getState('$robot.signIn').username
    }
  },
  methods: {
    onInput (value) {
      this.setState('$robot.signIn', {
        username: value
      })
      this.setRouter('homepage', {
        username: value
      })
    }
  }
})

mixTextInput({
  value () {
    return this.getState('$robot.signIn').username
  },
  onInput (value) {
    this.setState('$robot.signIn', {
      username: value
    })
    this.setRouter('homepage', {
      username: value
    })
  }
})
