<template>
    <div>
        <h1>Home</h1>
        <h1 v-if="user.loggedin">{{user.profile.email}}</h1>
        <router-link to="/login">Go to Login</router-link>
    </div>
</template>
<script>
    import { mapState,  mapActions} from "vuex";
    export default {
        name: 'home',
        mounted: function () {
            this.checkToken();
        },
        methods: {
            ...mapActions([
                'checkToken'
            ])
        },
        computed: mapState([
            'user'
        ])
    }
</script>
