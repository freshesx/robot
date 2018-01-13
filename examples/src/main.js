import 'babel-polyfill'
import Vue from 'vue'
import robotx from './robotx'
import store from './store'
import router from './router'
import vuelidate from './vuelidate'
import app from './app'

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

new Vue({
  el: '#app',
  robotx,
  store,
  router,
  vuelidate,
  render: h => h(app)
})
