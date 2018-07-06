import {_login, _register} from '@/services/Auth'
import * as type from './types'
import { setToken } from '@/services/Http'

const actions = {
  doLogin ({ commit }, data) {
    return new Promise((resolve, reject) => {
      _login(data).then(response => {
        commit(type.STORE_USER, {
          payload: response.body
        })
        resolve(response)
      }, err => reject(err))
    })
  },
  doSingup ({ commit }, data) {
    return new Promise((resolve, reject) => {
      _register(data).then(response => {
        commit(type.STORE_USER, {
          payload: response.body
        })
        resolve(response)
      }, err => reject(err))
    })
  },
  checkToken ({ commit }) {
    setToken()
  },
  doLogout ({ commit }) {
    logoutUser(commit)
  },
  updateProfile ({ commit }, user) {
    commit(type.PROFILE_UPDATE, {
      payload: user
    })
  }
}

let logoutUser = (commit) => {
  commit(type.LOGOUT)
}

export default actions
