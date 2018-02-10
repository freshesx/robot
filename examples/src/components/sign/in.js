import { mixSignIn, mixTextInput } from '@freshes/robot'

export default mixSignIn({
  input: {
    forms () {
      return [
        mixTextInput()
      ]
    }
  }
})
