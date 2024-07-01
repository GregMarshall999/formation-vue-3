<template>

<h1>Inscrivez vous:</h1>

<FormlaireValid :champs="champs" :buttonLabel="'S\'inscrire'" :submit="inscription"/>

</template>

<script>
import FormlaireValid from '@/components/Formulaires/FormulaireValid.vue'
import veeValidationMixin from '@/mixins/veeValidationMixin';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            champs: [
                { label: 'Nom', name: 'nom', type: 'text', rules: [this.validerRequis] }, 
                { label: 'Prenom', name: 'prenom', type: 'text', rules: [this.validerRequis] }, 
                { label: 'Email', name: 'email', type: 'email', rules: [this.validerRequis, this.validerEmail] }, 
                { label: 'Mot de passe', name: 'mdp', type: 'password', rules: [this.validerRequis, this.validerMdp] }
            ]
        }
    },
    components: {
        FormlaireValid
    }, 
    methods: {
        ...mapActions('utilisateurStore', ['inscrireUtilisateur']),
        inscription(valeurs) {
            this.inscrireUtilisateur(valeurs)
        }
    },
    mixins: [veeValidationMixin]
}

</script>