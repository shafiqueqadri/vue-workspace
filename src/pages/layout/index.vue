<template>
    <div id="app">
        <div class="container">
            <nav-bar></nav-bar>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapActions
    } from 'vuex'
    import navBar from '@/components/nav'
    export default {
        components: {
            navBar
        },
        name: 'app',
        mounted() {
            this.checkToken()
        },
        methods: {
            ...mapActions(['doLogout', 'checkToken'])
        },
        computed: mapState(['user'])
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
