<template>
    <h1>Mon Dashboard</h1>


</template>

<script>

export default { 
    data() {
        return {
            roles: this.$route.meta.roles
        }
    },
    created() {
        //console.log(this.$route)
    }
}

</script>