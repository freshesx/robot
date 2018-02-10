import mixComponents from '../../helpers/mixComponent.js'
import RtSignInMixin from './RtSignInMixin.js'

export default function (config) {
  return mixComponents(config, RtSignInMixin)
}
