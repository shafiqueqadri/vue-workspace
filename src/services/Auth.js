import * as http from './Http'


export const _login = data => {
    return http.post(`oauth/signin`, data);
}