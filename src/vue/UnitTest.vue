<template>

    <h1>{{ msg }}</h1>

    <button @click="increment">Incrementer</button>
    <p>{{ compte }}</p>

</template>

<script>

export default {
    data() {
        return {
            compte: 0
        }
    },
    props: {
        msg: String
    }, 
    methods: {
        increment() {
            this.compte++;
        }
    }
}

</script>