import * as http from './Http'


/**
 * @param {Object} data Object
 * @return {Promise} mixed Promise
 */
export const _login = data => http.post(`oauth/signin`, data);