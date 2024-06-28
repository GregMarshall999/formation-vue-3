<template>

<button @click="show = !show">Afficher/Cacher Paragraphe</button>

<transition name="effacer">
    <p v-if="show">Je suis un paragraphe qui va se cacher</p>
</transition>


</template>

<script>

export default {
    data() {
        return {
            show: true
        }
    }
}

</script>

<style>

.effacer-enter-active, .effacer-leave-active {
    transition: opacity 1s;
}

.effacer-enter-form, .effacer-leave-to {
    opacity: 0;
}

</style>