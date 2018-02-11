import mix from '../../helpers/mix.js'
import {
  FormItem as ElFormItem,
  Input as ElInput } from 'element-ui'

const TextInput = {
  name: 'RtTextInput',
  render (h) {
    return (
      <ElFormItem label={this.label}>
        <ElInput
          value={this.value}
          placeholder={this.placeholder}
          onInput={this.onInput}
        />
      </ElFormItem>
    )
  },
  computed: {
    label () {
      return 'TextInput'
    },
    value () {
      return undefined
    },
    placeholder () {
      return 'Placeholder'
    }
  },
  methods: {
    onInput (value) {
      return value
    }
  }
}

export default config => mix(TextInput, config)
