import Vue from 'vue'
import { Robot } from '@freshes/robot'
import dashboard from './dashboard'
import homepage from './homepage'
import products from './products'
import sign from './sign'

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

// @todo 自动加载 router 和 store 配置
Vue.use(new Robot({
  dashboard,
  homepage,
  products,
  sign
}))

new Vue({
  el: '#app',
  render: h => h(app)
})
