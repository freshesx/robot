import Vue from 'vue'
import { Robot } from '@freshes/robot'
import 'element-ui/lib/theme-chalk/index.css'
import '../../dist/main.css'
import dashboard from './components/dashboard/module.js'
// import sign from './components/sign/routes.js'

const robot = new Robot({
  modules: {
    dashboard
  },
  strict: process.env.NODE_ENV !== 'production'
})

Vue.use(robot)
