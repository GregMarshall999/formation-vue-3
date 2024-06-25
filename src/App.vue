<template>
  <div v-if="toggle">
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

  <h2>Rendu Liste</h2>
  <RenduListe />

  <h2>Propriétés Calculées</h2>
  <PropCalculee />

  <h2>Cycle de Vie Vue</h2>
  <LifeCycle />

  <h2>Watchers / Observateurs</h2>
  <Watchers />
  </div>
  
  <h2>Props</h2>
  <Props :message="'Un message passé depuis le composant parent'" />

  <br>
  <button @click="toggle = !toggle">{{ toggle ? 'Cacher' : 'Afficher' }}</button>
</template>

<script>
import Exercice_01 from '@/components/Exercice_01.vue';
import Exercice_02 from '@/components/Exercice_02.vue';
import LiaisonFormulaire from '@/components/LiaisonFormulaire.vue';
import RenduConditionnel from '@/components/RenduConditionnel.vue';
import RenduListe from '@/components/RenduListe.vue';
import PropCalculee from '@/components/PropCalculee.vue';
import LifeCycle from '@/components/LifeCycle.vue';
import Watchers from '@/components/Watchers.vue';
import Props from '@/components/Props.vue';

export default {
  data() {
    return {
      texte: 'Du Texte déclaratif', 
      couleurTitre: 'title', 
      texteAAfficher: 'Coucou', 
      toggle: false
    }
  }, 
  components: {
    Exercice_01, 
    Exercice_02,
    LiaisonFormulaire, 
    RenduConditionnel, 
    RenduListe, 
    PropCalculee, 
    LifeCycle, 
    Watchers, 
    Props
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