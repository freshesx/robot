import mix from '../../helpers/mix.js'
import {
  FormItem as ElFormItem,
  Input as ElInput } from 'element-ui'

const TextInput = {
  name: 'RtPasswordInput',
  render (h) {
    return (
      <ElFormItem label={this.label}>
        <ElInput
          type='password'
          value={this.value}
          placeholder={this.placeholder}
          onInput={this.onInput}
        />
      </ElFormItem>
    )
  },
  computed: {
    label () {
      return '密码'
    },
    value () {
      return undefined
    },
    placeholder () {
      return '点击输入密码'
    }
  },
  methods: {
    onInput (value) {
      return value
    }
  }
}

export default config => mix(TextInput, config)
