<template>
  <div>
    <h1 :class="couleurTitre">{{ texte }}</h1>
    <div>{{ texteAAfficher }}</div>
    <button v-on:click="changerTexte">Changer le texte au dessus</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      texte: 'Du Texte déclaratif', 
      couleurTitre: 'title', 
      texteAAfficher: 'Coucou'
    }
  }, 
  methods: {
    changerTexte() {
      this.texteAAfficher = 'Toto'
    }
  }
}

</script>

<style>

.title {
  color: red;
}

</style>