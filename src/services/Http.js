
import Vue from 'vue';
import VueResource from 'vue-resource';
import { API } from "../environment";
import { TOKEN } from "../constant/keys";
import * as _storage from './Storage'
Vue.use(VueResource)

/**
 * @param {String} url 
 * @return { Promise }
 */
export const get = (url) => Vue.http.get(`${API}/${url}`);

/**
 * Used to Insert Record
 * @param {String} url String
 * @param {Object} data Object
 * @return { Promise } mixed
 */

export const put = (url, data) => Vue.http.put(`${API}/${url}`, data);

/**
 * Used to Delete Record
 * @param {String} url String
 * @return { Promise } mixed
 */
export const del = (url) => Vue.http.delete(`${API}/${url}`);

/**
 * Used to Insert/Update record
 * @param {String} url String
 * @param { Object } data Object
 * @return { Promise } mixed
 */
export const post = (url, data) => Vue.http.post(`${API}/${url}`, data);

export const setToken = () => {
    let token = _storage.get(TOKEN);

    Vue.http.interceptors.push(function (request) {

        // modify method
        // request.method = 'POST';

        // modify headers
        request.headers.set('X-CSRF-TOKEN', 'TOKEN');
        request.headers.set('Authorization', `Bearer ${token}` );

    });
}