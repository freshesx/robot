import Vue from 'vue'
import { Robot } from '@freshes/robot'
// --
import dashboard from './components/dashboard'
import sign from './components/sign'
// ---
import '../../dist/main.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

const robot = new Robot({
  dashboard,
  sign
})

robot.render(Vue)
