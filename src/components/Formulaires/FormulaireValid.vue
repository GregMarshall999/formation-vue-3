<template>

<Form @submit="submit">
    <div v-for="champ in champs">
        <label>{{ champ.label }}</label>

        <Field :name="champ.name" :type="champ.type" :rules="champ.rules"/>
        <ErrorMessage :name="champ.name"/>
    </div>

    <button>{{ buttonLabel }}</button>
</Form>

</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
    props: {
        champs: Array, 
        buttonLabel: String, 
        submit: Function
    },
    components: {
        Form, 
        Field, 
        ErrorMessage
    }
}

</script>