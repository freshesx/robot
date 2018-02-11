import { Robot } from '@freshes/robot'
import dashboard from './components/dashboard'
import sign from './components/sign'
import 'element-ui/lib/theme-chalk/index.css'
import '../../dist/main.css'

const robot = new Robot({
  dashboard,
  sign
})

robot.render({
  strict: process.env.NODE_ENV !== 'production'
})
