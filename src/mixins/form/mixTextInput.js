import Vue from 'vue'
import mixComponents from '../../helpers/mixComponent.js'

export default function (config) {
  return mixComponents(config, TextInput)
}

const TextInput = {
  name: 'RtTextInputMixin',
  render (h) {
    const ElFormItem = Vue.component('ElFormItem')
    const ElInput = Vue.component('ElInput')

    return (
      <ElFormItem label={'活动名称'}>
        <ElInput value={'nihao'} />
      </ElFormItem>
    )
  }
}
