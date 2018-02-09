import mixComponents from '../../helpers/mixComponent.js'
import RtJumbotronMixin from './RtJumbotronMixin.vue'

export default function (config) {
  return mixComponents(config, RtJumbotronMixin)
}
