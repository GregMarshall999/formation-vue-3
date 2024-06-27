<template>
    <form @submit.prevent="envoyer">
        <div>
            <label>Nom</label>
            <input v-model="nom" type="text" @blur="validerRequis('nom', nom)"/>
            <span v-if="erreurs.nom">{{ erreurs.nom }}</span>
        </div>

        <div>
            <label>Email</label>
            <input v-model="email" type="email" @blur="validerEmail('email', email)"/>
            <span v-if="erreurs.email">{{ erreurs.email }}</span>
        </div>

        <button type="submit">Envoyer</button>
    </form>
</template>

<script>
import validationFormMixin from '@/mixins/validationFormMixin'

export default {
    data() {
        return {
            nom: '', 
            email: ''
        }
    }, 
    methods: {
        envoyer() {
            if(this.validerFormulaire(['nom', 'email'])) {
                alert('Formulaire est valide')
            }
            else {
                alert('Le formulaire n`est pas valide')
            }
        }
    }, 
    mixins: [validationFormMixin]
}

</script>

<style>

span {
    color: red;
}

</style>