import mix from '../../helpers/mix.js'
import {
  FormItem as ElFormItem,
  Input as ElInput } from 'element-ui'

const TextInput = {
  name: 'RtTextInput',
  render (h) {
    return (
      <ElFormItem label={'活动名称'}>
        <ElInput value={'nihao'} />
      </ElFormItem>
    )
  }
}

export default config => mix(config, TextInput)
