<template>

    <!--<Formulaire :contenu="contenu" :mode="true"/>-->

    <br>

    <!--<Formulaire :contenu="editer" />-->

    <br>

    <Formulaire v-model="reactif" :paramChamp="reactifTypes" :mode="true" />

</template>

<script>
import Formulaire from '@/components/Formulaires/Formulaire.vue';

export default {
    data() {
        return {
            contenu: {
                nom: '',
                prenom: '',
                age: null,
                participation: false
            }, 
            editer: {
                nom: 'Marshall',
                prenom: 'Gregory',
                age: null,
                participation: true
            }, 

            reactif: {
                nom: 'Marshall', 
                prenom: '', 
                age: '', 
                participation: '', 
                addresse: '', 
                email: ''
            },

            reactifTypes: [
                { key: 'nom', type: 'text' },
                { key: 'prenom', type: 'text' },
                { key: 'age', type: 'number' },
                { key: 'participation', type: 'checkbox' },
                { key: 'addresse', type: 'text' },
                { key: 'email', type: 'text' }
            ]
        }
    },
    components: {
        Formulaire
    }
}

</script>