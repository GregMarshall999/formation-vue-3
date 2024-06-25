<template>
    <h2>Composant Enfant</h2>
    <button @click="this.$emit('reponse', 'Je suis un composant enfant depuis un bouton')">envoyer</button>
</template>

<script>

export default {
    emits: ['reponse'], 
    created() {
        //console.log('Enfant emet un evenement')
        this.$emit('reponse', 'Je suis un composant enfant', true);
    }
}

</script>