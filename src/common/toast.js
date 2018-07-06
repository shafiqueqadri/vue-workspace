import Vue from 'vue'
import {translate} from '@/filters'

const options = {
  duration: 3000,
  position: 'bottom-center'
}

const toast = {
  show: (message, opt = {}) => Vue.toasted.show(translate(message) || message, {...options, ...opt}),
  success: (message, opt = {}) => Vue.toasted.success(translate(message) || message, {...options, ...opt}),
  info: (message, opt = {}) => Vue.toasted.info(translate(message) || message, {...options, ...opt}),
  error: (message, opt = {}) => Vue.toasted.error(translate(message) || message, {...options, ...opt})
}

export default toast
