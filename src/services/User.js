import * as http from './Http'

/**
 * @param {Object} data Object
 * @return {Promise} mixed Promise
 */
export const _loadProfile = data => http.get(`users/profile`);