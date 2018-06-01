
import Vue from 'vue';
import VueResource from 'vue-resource';
import { API } from "../environment";
Vue.use(VueResource)

/**
 * @param {String} url 
 * @return { Promise }
 */
export const get = (url) => {
    return Vue.http.get(`${API}/${url}`)
}

/**
 * Used to Insert Record
 * @param {String} url String
 * @param {Object} data Object
 * @return { Promise } mixed
 */

export const put = (url, data) => {
    return Vue.http.put(`${API}/${url}`, data)
}

/**
 * Used to Delete Record
 * @param {String} url String
 * @return { Promise } mixed
 */
export const del = (url) => {
    return Vue.http.delete(`${API}/${url}`)
}

/**
 * Used to Insert/Update record
 * @param {String} url String
 * @param { Object } data Object
 * @return { Promise } mixed
 */
export const post = (url, data) => {
    return Vue.http.post(`${API}/${url}`, data)
}