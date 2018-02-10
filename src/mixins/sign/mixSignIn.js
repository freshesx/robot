import mix from '../../helpers/mix.js'
import { Form as ElForm } from 'element-ui'

const SignIn = {
  name: 'RtSignIn',
  render (h) {
    return (
      <ElForm>
        {/* {(
          this.forms.map(field => this.parseField(h, field))
        )} */}
        hihihihihi
        {this.forms.map(field => field)}
      </ElForm>
    )
  },
  methods: {
    parseField (h, field) {
      return h(field)
    }
  },
  computed: {
    forms () {
      return [
        {
          render (h) {
            h('div', 'nihao')
          }
        }
      ]
    }
  }
}

export default config => mix(config, SignIn)
