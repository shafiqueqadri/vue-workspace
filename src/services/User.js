import * as http from './Http'

const USER = 'user'
/**
 * @return {Promise} mixed Promise
 */
export const _loadProfile = () => http.get(`${USER}/profile`)

/**
 * @param {Object} user User Information
 * @return {Promise} mixed Promise
 */
export const _update = user => http.put(`${USER}`, user)
