import mixComponents from '../../helpers/mixComponent.js'
import RtDashboardMixin from './RtDashboardMixin.js'

export default function (config) {
  return mixComponents(config, RtDashboardMixin)
}
