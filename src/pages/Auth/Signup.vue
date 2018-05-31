<template>
    <div id="singup">
        <h1>singup</h1>
        <form>
            <input id="" v-model="user.email" class=""/>
            <input v-model="user.password" class=""/>
            <input v-model="user.confirm_password" class=""/>
        </form>
    </div>
</template>

<script>
import '../../assets/scss/style.scss';
    export default {
        name: 'singup'
    }
</script>
