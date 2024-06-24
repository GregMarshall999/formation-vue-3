<template>
    <input v-model="prenom" placeholder="Entrez votre prénom">
    <button @click="saisir">Afficher</button>
    <button @click="cacher">Cacher</button>

    <p v-if="saisit">Bonjour {{ prenom }}</p>
    <p v-else>Veuillez entrer votre prénom</p>
</template>

<script>

export default {
    data() {
        return {
            prenom: '', 
            saisit: false
        }
    }, 
    methods: {
        saisir() {
            this.saisit = true;
        }, 
        cacher() {
            this.saisit = false;
        }
    }
}

</script>