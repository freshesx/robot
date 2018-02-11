import mix from '../../helpers/mix.js'
import mixTextInput from '../form/mixTextInput.js'
import mixPasswordInput from '../form/mixPasswordInput.js'
import {
  Form,
  FormItem,
  Button,
  Row,
  Col,
  Checkbox } from 'element-ui'

const Username = mixTextInput({
  computed: {
    label: () => '用户名',
    placeholder: () => '点击输入用户名登录账号',
    value () {
      return this.$store.state.$robot.signIn.username
    }
  },
  methods: {
    onInput (value) {
      this.$store.commit('$robotSetSignIn', { username: value })
    }
  }
})

const Password = mixPasswordInput({
  computed: {
    value () {
      return this.$store.state.$robot.signIn.password
    }
  },
  methods: {
    onInput (value) {
      this.$store.commit('$robotSetSignIn', { password: value })
    }
  }
})

const SignIn = {
  name: 'RtSignIn',
  render (h) {
    return (
      <div style={{
        backgroundColor: '#f1f2f5',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Row>
          <Col span={8} offset={8}>
            <h1 style={{
              textAlign: 'center',
              marginTop: '-30px'
            }}>
              FRESHES
            </h1>
            <div style={{
              textAlign: 'center',
              fontSize: '12px',
              color: '#666',
              padding: '0.5rem 0 1.5rem 0'
            }}>
              我可能的确是东半球效率最高的中后台业务库了
            </div>
            <Form>
              {(
                this.fields.map(field => h(field))
              )}
              <FormItem>
                <Row type='flex' justify='space-between'>
                  <Col span={6}>
                    <Checkbox>自动登录</Checkbox>
                  </Col>
                  <Col span={6} style='text-align: right;'>
                    <Button type='text'>忘记密码</Button>
                  </Col>
                </Row>
              </FormItem>
              <FormItem>
                <Button
                  type='primary'
                  onClick={this.onSubmit}
                  style='width: 100%'
                >登录</Button>
              </FormItem>
              <FormItem style='text-align: center;'>
                <Button type='text'>注册用户</Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    )
  },
  computed: {
    fields () {
      return [
        Username,
        Password
      ]
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
    }
  }
}

export default config => mix(SignIn, config)
