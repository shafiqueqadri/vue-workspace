import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './routes'

import { translate } from './filters';

Vue.config.productionTip = false

Vue.filter('translate', translate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
