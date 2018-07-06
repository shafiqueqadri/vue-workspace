import Vue from 'vue'
import App from './App.vue'
// import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './routes'
import store from './store'
import Toasted from 'vue-toasted'
import VueI18n from "vue-i18n";
import custom_plugin from './plugin'
import { translate } from '@/filters'

Vue.use(Toasted, {iconPack: 'font-awesome'})
Vue.use(custom_plugin)
// Vue.use(BootstrapVue)
Vue.filter('translate', translate)

Vue.use(VueI18n);

const numberFormats = {
  "en-US": {
    currency: {
      style: "currency",
      currency: "USD"
    }
  }
};

const i18n = new VueI18n({numberFormats});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
