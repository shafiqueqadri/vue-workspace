import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource'
import createLogger from 'vuex/dist/logger'
//Modules
import user from './user'

Vue.use(Vuex);
Vue.use(VueResource)

Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    modules: {
        user
    },
    strict: false,
    middlewares: debug ? [createLogger()] : []
})

export default  store;