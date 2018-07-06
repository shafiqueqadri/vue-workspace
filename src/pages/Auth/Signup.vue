<template>
    <div>
        <div class="imgcontainer">
            <img src="http://www.gitesoft.com/wp-content/uploads/2015/05/gs.png" alt="Avatar" class="avatar">
        </div>
    
        <div class="container text-left">
            <label for="uname"><b>{{'name' | translate}}</b></label>
            <input type="text" :placeholder="'name' | translate" name="uname" v-model="user_form.name" required>
            <validation-error v-if="errors.name" :errors="errors.name"></validation-error>

            <label for="email"><b>{{'email' | translate}}</b></label>
            <input type="text" :placeholder="'email' | translate" name="email" v-model="user_form.email" required>
            <validation-error v-if="errors.email" :errors="errors.email"></validation-error>

            <label for="psw"><b>{{'password' | translate}}</b></label>
            <input type="password" :placeholder="'password' | translate" name="psw" v-model="user_form.password" required>
            <validation-error v-if="errors.password" :errors="errors.password"></validation-error>

            <label for="psw1"><b>{{'password_confirmation' | translate}}</b></label>
            <input type="password" :placeholder="'password_confirmation' | translate" name="psw1" v-model="user_form.password_confirmation" required>
            <button type="button" @click="signup">{{'signup' | translate}}</button>
            <label>
                <router-link :to="{name: 'Login'}">{{'already_account' | translate}}</router-link>
            </label>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapActions
    } from 'vuex'
    export default {
        name: 'login',
        data() {
            return {
                password_toggle: false,
                user_form: {
                    name: '',
                    email: '',
                    password: ''
                },
                errors: {}
            }
        },
        mounted() {
            if (this.user.isLoggedIn) {
                this.$router.push('/home')
            }
        },
        methods: {
            ...mapActions(['doSingup']),
            signup() {
                this.doSingup(this.user_form).then( res => {
                        this.$toast.success(res.message)
                        this.$router.push({name: 'Home'})
                    },
                    error => {
                        this.errors = error.body.errors
                    }
                )
            }
        },
        computed: mapState(['user'])
    }
</script>

<style scoped>
    /* Bordered form */
    
    form {
        border: 3px solid #f1f1f1;
    }
    
    
    /* Full-width inputs */
    
    input[type=text],
    input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
    
    
    /* Set a style for all buttons */
    
    button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }
    
    
    /* Add a hover effect for buttons */
    
    button:hover {
        opacity: 0.8;
    }
    
    
    /* Extra style for the cancel button (red) */
    
    .cancelbtn {
        width: auto;
        padding: 10px 18px;
        background-color: #f44336;
    }
    
    
    /* Center the avatar image inside this container */
    
    .imgcontainer {
        text-align: center;
        margin: 24px 0 12px 0;
    }
    
    
    /* Avatar image */
    
    img.avatar {
        width: 40%;
        border-radius: 50%;
    }
    
    
    /* Add padding to containers */
    
    .container {
        padding: 16px;
    }
    
    
    /* The "Forgot password" text */
    
    span.psw {
        float: right;
        padding-top: 16px;
    }
    
    
    /* Change styles for span and cancel button on extra small screens */
    
    @media screen and (max-width: 300px) {
        span.psw {
            display: block;
            float: none;
        }
        .cancelbtn {
            width: 100%;
        }
    }
</style>
