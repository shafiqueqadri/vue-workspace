

/**
 * Storage data in Local Storage
 * @param {String} key 
 * @param {Any} value 
 */
export const set = (key, value) => localStorage.setItem(key, value);

/**
 * @param { String } key String
 */
export const get = key => localStorage.getItem(key);

/**
 * @param {String} key string
 */
export const remove = key => localStorage.removeItem(key);
