<template>
    <h1>Login</h1>
    <button @click="login">Login</button>
</template>

<script>
import { AuthService } from '@/router/index.js'

export default {
    methods: {
        login() {
            AuthService.isAuthenticated = true;
            this.$router.push({name: 'Dashboard'})
        }
    }
}

</script>