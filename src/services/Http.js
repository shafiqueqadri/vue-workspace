
import Vue from 'vue'
import VueResource from 'vue-resource'
import { API } from '@/environment'
import store from '@/store'

Vue.use(VueResource)

/**
 * @param {String} url
 * @return { Promise }
 */
export const get = (url) => {
  return new Promise((resolve, reject) => {
    Vue.http.get(`${API}/${url}`).then(response => {
      resolve(response)
    }, error => {
      reject(error)
    })
  })
}

/**
 * Used to Insert Record
 * @param {String} url String
 * @param {Object} data Object
 * @return { Promise } mixed
 */

export const put = (url, data) => {
  return new Promise((resolve, reject) => {
    Vue.http.put(`${API}/${url}`, data || {}).then(response => {
      resolve(response)
    }, error => {
      reject(error)
    })
  })
}

/**
 * Used to Insert Record
 * @param {String} url String
 * @param {Object} data Object
 * @return { Promise } mixed
 */

export const patch = (url, data) => {
  return new Promise((resolve, reject) => {
    Vue.http.patch(`${API}/${url}`, data || {}).then(response => {
      resolve(response)
    }, error => {
      reject(error)
    })
  })
}

/**
 * Used to Delete Record
 * @param {String} url String
 * @return { Promise } mixed
 */
export const del = (url) => {
  return new Promise((resolve, reject) => {
    Vue.http.delete(`${API}/${url}`).then(response => {
      resolve(response)
    }, error => {
      reject(error)
    })
  })
}

export const delWithBody = (url, body) =>
  Vue.http.delete(`${API}/${url}`, { body })

/**
 * Used to Insert/Update record
 * @param {String} url String
 * @param { Object } data Object
 * @return { Promise } mixed
 */
export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    Vue.http.post(`${API}/${url}`, data).then(response => {
      resolve(response)
    }, error => {
      reject(error)
    })
  })
}

export const setToken = () => {
  Vue.http.interceptors.push(function (request) {
    let token = store.state.user.token || ''
    request.headers.set('X-CSRF-TOKEN', 'TOKEN')
    request.headers.set('Authorization', `Bearer ${token}`)
  })
}
