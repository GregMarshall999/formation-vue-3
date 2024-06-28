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

    <div>
        <label>Villes:</label>
        <Field name="tags" v-model="tags" :rules="validerRequis">
            <Vue3TagsInput @on-tags-changed="t => tags = t" :tags="tags"/>
        </Field>
        <ErrorMessage name="tags" />
    </div>

    <button>Envoyer</button>
</Form>

</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import veeValidationMixin from '@/mixins/veeValidationMixin'
import Vue3TagsInput from 'vue3-tags-input'

export default {
    data() {
        return {
            tags: []
        }
    },
    components: {
        Form, 
        Field, 
        ErrorMessage, 
        Vue3TagsInput
    }, 
    methods: {
        envoyer(valeurs) {
            console.log(valeurs)
        }
    }, 
    mixins: [veeValidationMixin]
}

</script>