import Vue from 'vue'
import store from './store'
import router from './router'
import app from './app'

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(app)
})
