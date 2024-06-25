<template>
    <p>Le nombre est: {{ nombre }}</p>
    <button @click="incremente">+</button><br>
    <button @click="decremente">-</button>
</template>

<script>

export default {
  data() {
    return {
      nombre: 0
    }
  }, 
  methods: {
    incremente() {
      this.nombre++;
    }, 
    decremente() {
      this.nombre--;
    }
  }
}

</script>