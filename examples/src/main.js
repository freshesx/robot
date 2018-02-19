import Vue from 'vue'
import { Robot } from '@freshes/robot'
import states from './states.js'
import routes from './routes.js'
import 'element-ui/lib/theme-chalk/index.css'
import '../../dist/main.css'

const robot = new Robot({
  modules: states,
  routes,
  strict: process.env.NODE_ENV !== 'production'
})

Vue.use(robot)
