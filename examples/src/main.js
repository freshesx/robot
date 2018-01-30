import Vue from 'vue'
import router from './router'
import store from './store'
import app from './app'

Vue.config.productionTip = process.env.NODE_ENV !== 'production'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(app)
})
