<template>

<Form @submit="envoyer">
    <div>
        <label>Nom:</label>
        <Field name="nom" type="text" :rules="validerRequis" />
        <ErrorMessage name="nom"/>
    </div>
    
    <div>
        <label>Email:</label>
        <Field name="email" type="email" :rules="[validerRequis, validerEmail]" />
        <ErrorMessage name="email"/>
    </div>

    <button>Envoyer</button>
</Form>

</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import veeValidationMixin from '@/mixins/veeValidationMixin'

export default {
    components: {
        Form, 
        Field, 
        ErrorMessage
    }, 
    methods: {
        envoyer(valeurs) {
            console.log(valeurs)
        }
    }, 
    mixins: [veeValidationMixin]
}

</script>