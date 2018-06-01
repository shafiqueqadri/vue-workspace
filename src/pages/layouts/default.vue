<template>
    <div>
        <login v-if="!isLoggedIn"></login>
        <home v-else>
            <router-view></router-view>
        </home>
    </div>

</template>
<script>
import Login from '../Auth/Login.vue'
import Home from '../Home.vue'
import * as _user from '../../services/User';
import { setToken } from "../../services/Http";
export default {
    name: 'layout',
    data: function () {
        return {
            isLoggedIn: false
        }
    },
    components: {
        Login,
        Home
    },
    
    mounted: function(){
        setToken();
        _user._loadProfile().then(esponse => {
            this.isLoggedIn = true;
        }, function (err) {

        })
    }
}
</script>
