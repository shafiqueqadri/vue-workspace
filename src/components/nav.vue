<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">
                        <router-link :to="{name: 'Home'}">{{'home' | translate}}</router-link> <span class="sr-only">(current)</span>
                    </a>
                </li>
                <!-- <li class="nav-item">
                </li> -->
            </ul>
            <div class="form-inline my-2 my-lg-0">
    
                <ul class="navbar-nav mr-auto">
                    <li v-if="user.isLoggedIn" class="nav-item" style="margin-right: 10px;">
                        <button class="btn btn-default">{{this.user.info.name}}</button>
                    </li>
                    <li v-if="user.isLoggedIn" class="nav-item">
                        <button class="btn btn-danger" @click="doLogout">{{'logout' | translate}}</button>
                    </li>
                    <li v-if="!user.isLoggedIn" class="nav-item active">
                        <router-link :to="{name: 'Login'}">{{'login' | translate}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import {
        mapState,
        mapActions
    } from 'vuex'
    export default {
        name: 'nav-bar',
        methods: {
            ...mapActions(['doLogout', 'checkToken'])
        },
        computed: mapState(['user'])
    }
</script>
