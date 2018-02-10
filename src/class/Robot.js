import ElementUI from 'element-ui'
import '../scss/reset.css'
import '../scss/style.scss'
import '../mixins/dashboard/main.scss'

export default class Robot {
  install (Vue, Options) {
    Vue.use(ElementUI)
  }
}
