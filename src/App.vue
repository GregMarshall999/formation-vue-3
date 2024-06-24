<template>
  <div>
    <h1 :class="couleurTitre">{{ texte }}</h1>
    <div>{{ texteAAfficher }}</div>
    <button v-on:click="changerTexte">Changer le texte au dessus</button>
  </div>

  <h2>Exercice 1</h2>
  <Exercice_01 />

  <h2>Liaison Formulaire</h2>
  <LiaisonFormulaire />

  <h2>Rendu Conditionnel</h2>
  <RenduConditionnel />

  <h2>Exercice 2</h2>
  <Exercice_02 />
</template>

<script>
import Exercice_01 from '@/components/Exercice_01.vue';
import Exercice_02 from '@/components/Exercice_02.vue';
import LiaisonFormulaire from '@/components/LiaisonFormulaire.vue';
import RenduConditionnel from '@/components/RenduConditionnel.vue';

export default {
  data() {
    return {
      texte: 'Du Texte déclaratif', 
      couleurTitre: 'title', 
      texteAAfficher: 'Coucou'
    }
  }, 
  components: {
    Exercice_01, 
    Exercice_02,
    LiaisonFormulaire, 
    RenduConditionnel
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