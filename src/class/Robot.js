import ElementUI from 'element-ui'
import '../scss/reset.css'
import '../scss/style.scss'

export default class Robot {
  install (Vue, Options) {
    Vue.use(ElementUI)
  }
}
