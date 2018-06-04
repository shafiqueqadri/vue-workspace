<template>
    <div id="login">
        <h1>{{ 'site_name' | translate }}</h1>
        <button @click="login">Login</button>

    </div>
</template>

<script>
    import * as _auth from '../../services/Auth'
    import * as _storage from '../../services/Storage'
    import { TOKEN, USER_ID } from "../../constant/keys";
    import { setToken } from "../../services/Http";
    import * as _user from '../../services/User'

    import { mapState,  mapActions} from "vuex";
    
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
        },
        methods: {
            ...mapActions([
                'doLogin'
            ]),
            login: function () {
                this.doLogin({email: 'admin1s@gmail.com', password: 'admin1'});
                this.$route.push('/home')
            }
        },
        // computed: mapState([
        //     'user'
        // ])
    }
</script>
