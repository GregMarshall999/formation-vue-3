<template>

<h1>Connectez vous:</h1>

<FormulaireValid :champs="champs" :buttonLabel="'Connexion'" :submit="connexionUtilisateur" />

{{ utilisateur }}

</template>

<script>
import FormulaireValid from '@/components/Formulaires/FormulaireValid.vue';
import veeValidationMixin from '@/mixins/veeValidationMixin';
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            champs: [
                { label: 'Email', name: 'email', type: 'email', rules: [this.validerRequis, this.validerEmail] }, 
                { label: 'Mot de passe', name: 'mdp', type: 'password', rules: [this.validerRequis, this.validerMdp] }
            ]
        }
    },
    components: {
        FormulaireValid
    }, 
    computed: {
        ...mapGetters('utilisateurStore', { utilisateur: 'getUtilisateur' })
    },
    methods: {
        ...mapActions('utilisateurStore',  ['connexion', 'resetUtilisateur']), 
        connexionUtilisateur(valeurs) {
            this.connexion(valeurs)
        }
    },
    mixins: [veeValidationMixin], 
    beforeUnmount() {
        this.resetUtilisateur();
    }
}

</script>