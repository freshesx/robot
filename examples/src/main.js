import { Robot } from '@freshes/robot'
import 'element-ui/lib/theme-chalk/index.css'
import '../../dist/main.css'
import dashboard from './components/dashboard/routes.js'
import sign from './components/sign/routes.js'

const robot = new Robot()

robot.render({
  routes: [
    ...dashboard,
    ...sign
  ],
  strict: process.env.NODE_ENV !== 'production'
})
