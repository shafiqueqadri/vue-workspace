import * as type from './types'
import actions from './actions';

const state = {
    profile: {},
    loggedin: false
}

const mutations = {
    [type.STORE_USER](state, action){
        state.profile = action.payload;
        state.loggedin = true;
    }
}

export default {
    actions,
    state,
    mutations
}