<template>
    <div>
        <div class="imgcontainer">
        </div>

        <div class="container text-left">
            <label for="uname"><b>{{'email' | translate}}</b></label>
            <input type="text" :placeholder="'email' | translate" name="uname" required v-model="user_form.email">

            <label for="psw"><b>{{'password' | translate}}</b></label>
            <input type="password" :placeholder="'password' | translate" name="psw" required v-model="user_form.password">

            <button type="button" @click="login">{{'login' | translate}}</button>
            <label>
              <router-link :to="{name: 'Signup'}">{{'create_account' | translate}}</router-link>
            </label>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      password_toggle: false,
      user_form: {
        email: '',
        password: ''
      }
    }
  },
  mounted () {
    if (this.user.isLoggedIn) {
      this.$router.push('/home')
    }
  },
  methods: {
    ...mapActions(['doLogin']),
    login () {
      this.doLogin(this.user_form).then(
        () => {
          this.$toast.success('welcome_back')
          this.$router.go(-1)
        },
        error => {
          this.$toast.error(error.body.response, { position: 'top-center' })
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
