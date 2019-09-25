import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Purecss from 'purecss'
import VueCountdownTimer from 'vuejs-countdown-timer'

Vue.config.productionTip = false
Vue.use(VueCountdownTimer)

new Vue({
  router,
  store,
  Purecss,
  render: h => h(App)
}).$mount('#app')
