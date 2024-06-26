<template>
<router-link :to="{ name: 'ExDetails', params: { id: details.id, nom: details.nom } }">Détails</router-link>
</template>

<script>

export default {
    data() {
        return {
            details: {
                id: 1, 
                nom: 'Greg'
            }
        }
    }
}

</script>