<template>
    <div id="login">
        <h1>{{ 'site_name' | translate }}</h1>
    </div>
</template>

<script>
    import * as auth from '../../services/Auth'
    export default {
        name: 'login',
        mounted: function () {
            auth._login({email: 'mr.shafique.qadri@gmail.com', password: 'admin1'}).then(function (response) {
                console.log('====================================');
                console.log(response);
                console.log('====================================');
            })
        }
    }
</script>
