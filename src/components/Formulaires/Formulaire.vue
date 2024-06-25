<template>

<form @submit.prevent="envoyer">

    <div>
        <label>Votre Nom:</label>
        <input v-model="contenu.nom" type="text" />
    </div>
    
    <div>
        <label>Votre Prénom:</label>
        <input v-model="contenu.prenom" type="text" />
    </div>

    <div>
        <label>Votre age:</label>
        <input v-model="contenu.age" type="number" />
    </div>

    <div>
        <label>Votre Participation:</label>
        <input v-model="contenu.participation" type="checkbox" />
    </div>

    <button>{{ mode ? 'Créer' : 'Modifier' }}</button>
</form>

</template>

<script>

export default {
    data() {
        return {
            contenu: {
                nom: '',
                prenom: '',
                age: null,
                participation: false
            }
        }
    },
    props: {
        mode: Boolean
    }, 
    methods: {
        envoyer() {
            console.log(this.contenu);
        }
    }
}

</script>