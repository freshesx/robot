import { mixSignIn } from '@freshes/robot'

export default mixSignIn({
  methods: {
    onSubmit (event) {
      event.preventDefault()
      const { username, password } = this.$store.state.$robot.signIn
      window.alert(`用户名：${username}；密码：${password}。`)
    }
  }
})
