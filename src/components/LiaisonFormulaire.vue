<template>
    <input :value="text" @input="onInput" placeholder="Entrez du texte"/>
    <p>{{ text }}</p>

    <input v-model="model_text" placeholder="Entrez du texte pour le model"/>
    <p>{{ model_text }}</p>
</template>

<script>
export default {
    data() {
        return {
            text: '', 
            model_text: ''
        }
    }, 
    methods: {
        onInput(e) {
            this.text = e.target.value
        }
    }
}
</script>