<template>
  <NavBar />
  <br>
  <router-view/>
  
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

  <h2>Props</h2>
  <Props :message="'Un message passé depuis le composant parent'" />

  <h2>Emit</h2>
  <Emits @reponse="ecouterEnfant" />
  {{ messageEnfant }}

  <h2>Slots</h2>
  <Slots>
    <div v-if="enAttente">{{ enAttente }}</div>
  </Slots>

  <button @click="show = !show">hide show</button>
  <div v-show="show">Un message</div>
  </div>

  <br>
  <button @click="toggle = !toggle">{{ toggle ? 'Cacher' : 'Afficher' }}</button>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

import Exercice_01 from '@/vue/Exercice_01.vue';
import Exercice_02 from '@/vue/Exercice_02.vue';
import LiaisonFormulaire from '@/vue/LiaisonFormulaire.vue';
import RenduConditionnel from '@/vue/RenduConditionnel.vue';
import RenduListe from '@/vue/RenduListe.vue';
import PropCalculee from '@/vue/PropCalculee.vue';
import LifeCycle from '@/vue/LifeCycle.vue';
import Watchers from '@/vue/Watchers.vue';
import Props from '@/vue/Props.vue';
import Emits from '@/vue/Emits.vue';
import Slots from '@/vue/Slots.vue';

export default {
  data() {
    return {
      texte: 'Du Texte déclaratif', 
      couleurTitre: 'title', 
      texteAAfficher: 'Coucou', 
      toggle: false, 
      messageEnfant: 'L`enfant n`a pas encore envoyé de message', 
      enAttente: null, 
      show: false
    }
  }, 
  components: {
    NavBar,

    Exercice_01, 
    Exercice_02,
    LiaisonFormulaire, 
    RenduConditionnel, 
    RenduListe, 
    PropCalculee, 
    LifeCycle, 
    Watchers, 
    Props, 
    Emits, 
    Slots
  },
  methods: {
    changerTexte() {
      this.texteAAfficher = 'Toto'
    }, 
    ecouterEnfant(e, b) {
      console.log(e, b)
      this.messageEnfant = e
    }
  }, 
  mounted() {
    setTimeout(() => this.enAttente = 'Message d`attente', 3000)
  }
}

</script>

<style>

.title {
  color: red;
}

</style>