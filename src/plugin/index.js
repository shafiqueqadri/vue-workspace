import { MAIN_DOMAIN, API } from '@/environment'
import toast from '@/common/toast'
import StarRating from 'vue-star-rating'
import Errors from '@/components/errors'
import tinymce from 'vue-tinymce-editor'
// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'

/* Register component with one of 2 methods */

import Icon from 'vue-awesome/components/Icon'

// globally (in your main .js file)

export default {
  install (Vue) {
    Vue.component('star-rating', StarRating)
    Vue.component('icon', Icon)
    Vue.component('tinymce', tinymce)
    Vue.component('validation-error', Errors)

    Vue.prototype.$api = API
    Vue.prototype.$site_url = MAIN_DOMAIN
    Vue.prototype.$toast = toast
    Vue.prototype.$default_image = 'http://images.all-free-download.com/images/graphiclarge/harry_potter_icon_6825007.jpg'
    Vue.prototype.$load_image = (name) => {
      return `${MAIN_DOMAIN}/images/${name}`
    }
  }
}
