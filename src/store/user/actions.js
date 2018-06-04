import Vue from 'vue';
import { _login } from "../../services/Auth";
import * as type from "./types";
import * as _storage from "../../services/Storage";
import { setToken } from "../../services/Http";

const actions = {
    doLogin: ({commit}, data) => {
        _login(data).then(response => {
            storeInformation(commit, response.body)
        })
    },
    checkToken: ({commit}) => {
        if (_storage.get(type.TOKEN)) {
            setToken();
            commit(type.STORE_USER, {
                payload: JSON.parse(_storage.get(type.PROFILE))
            })
        }
    }
}

let storeInformation = (commit, response) => {
    _storage.set(type.TOKEN, response.token)
    _storage.set(type.USER_ID, response.user.id)
    _storage.set(type.PROFILE, JSON.stringify(response.user))
    setToken();

    commit(type.STORE_USER, {
        payload: response.user
    })
}

export default actions;