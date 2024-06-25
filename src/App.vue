<template>
  <NavBar />
  <br>
  <router-view/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  data() {
    return {
      messageEnfant: 'L`enfant n`a pas encore envoyé de message', 
      enAttente: null, 
      show: false
    }
  }, 
  components: {
    NavBar,
  },
  methods: {
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

</style>