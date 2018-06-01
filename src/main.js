import Vue from 'vue'
import App from './App.vue'

import router from './routes'

import { translate } from './filters';

Vue.config.productionTip = false

Vue.filter('translate', translate);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
