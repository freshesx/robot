import mixComponents from '../../helpers/mixComponent.js'
import RtDashboardMixin from './RtDashboardMixin.vue'

export default function (config) {
  return mixComponents(config, RtDashboardMixin)
}
