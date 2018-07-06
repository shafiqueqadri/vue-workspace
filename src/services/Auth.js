import * as http from './Http'

const OAUTH = 'oauth'

/**
 * @param {Object} data Object
 * @return {Promise} mixed Promise
 */
export const _login = data => http.post(`${OAUTH}/signin`, data)

/**
 * @param {Object} data Object
 * @return {Promise} mixed Promise
 */
export const _register = data => http.post(`${OAUTH}/register`, data)

/**
 * @param {Object} data Object
 * @return {Promise} mixed Promise
 */
export const _forgotPassword = data => http.post(`${OAUTH}/forgot-password`, data)

/**
 * @param {Object} data Object
 * @return {Promise} mixed Promise
 */
export const _changePassword = data => http.post(`user/change-password`, data)

/**
 * @param {Object} data Object
 * @param {Object} data Object
 * @return {Promise} mixed Promise
 */
export const _resetPassword = (data) => http.post(`${OAUTH}/reset`, data)
