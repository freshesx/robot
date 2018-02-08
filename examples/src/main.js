import Vue from 'vue'
import { Robot } from '@freshes/robot'
import router from './router'
import store from './store'
import app from './app'
import '../../dist/main.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(new Robot())

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(app)
})
