<template>
    <div>
        <router-view></router-view>
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
    }
}
</script>
