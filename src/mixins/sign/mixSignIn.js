import mix from '../../helpers/mix.js'
import { Form as ElForm } from 'element-ui'

const SignIn = {
  name: 'RtSignIn',
  render (h) {
    return (
      <ElForm>
        {(
          this.forms.map(field => h(field))
        )}
      </ElForm>
    )
  },
  computed: {
    forms () {
      return []
    }
  }
}

export default config => mix(config, SignIn)
