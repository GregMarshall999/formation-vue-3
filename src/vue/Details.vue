<template>

    <p>Utilisateur {{ nom }} Avec ID:{{ id }}</p>

</template>

<script>

export default {
    props: {
        id: String, 
        nom: String
    }
}

</script>