import Vue from 'vue';
import VueRouter from 'vue-router';

//Page
import Home from '../pages/Home.vue'
import Login from '../pages/Auth/Login.vue'
import Signup from '../pages/Auth/Signup.vue'

Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/login',
            component: Login,
            name: 'login'
        },
        {
            path: '/signup',
            component: Signup,
            name: 'signup'
        }
    ]
})