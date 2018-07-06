import * as type from './types'
import actions from './actions'
import toast from '@/common/toast'
const state = {
  info: {},
  isLoggedIn: false,
  role: null,
  id: '',
  token: ''
}

const mutations = {
  [type.STORE_USER] (state, { payload }) {
    state.info = payload.user
    state.isLoggedIn = true
    state.role = payload.role
    state.token = payload.token
    state.id = payload.user.id
  },
  [type.LOGOUT] (state) {
    state.info = {}
    state.isLoggedIn = false
    state.role = null
    state.id = ''
    state.token = ''
    toast.info('logout_thank_you', { position: 'top-right' })
  },
  [type.PROFILE_UPDATE] (state, action) {
    state.info = action.payload
  }
}
export default {
  actions,
  state,
  mutations
}
