<template>
    <div id="login">
        <h1>{{ 'site_name' | translate }}</h1>
        <button @click="doLogin">Login</button>
    </div>
</template>

<script>
    import * as _auth from '../../services/Auth'
    import * as _storage from '../../services/Storage'
    import { TOKEN, USER_ID } from "../../constant/keys";
    import { setToken } from "../../services/Http";
    import * as _user from '../../services/User'

    export default {
        name: 'login',
        data: function () {
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        mounted: function () {
            setToken();
            this.loadProfile()
        },
        methods: {
            doLogin: function () {
                let self = this;
                _auth._login({email: 'admin1s@gmail.com', password: 'admin1'}).then(function (response) {
                    _storage.set(TOKEN, response.body.token)
                    _storage.set(USER_ID, response.body.user.id)

                    setToken();
                })
            },

            loadProfile: function () {
                _user._loadProfile().then(function (response){
                    console.log('====================================');
                    console.log(response);
                    console.log('====================================');
                })
            }
        }
    }
</script>
