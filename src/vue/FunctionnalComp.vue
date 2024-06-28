<template>

<FunctionnalButton @click="clickezMoi">Clickez Moi</FunctionnalButton>

</template>

<script setup>

import { h, defineComponent } from 'vue'

const FunctionnalButton = defineComponent({
    functionnal: true, 
    props: {
        onClick: Function
    }, 
    setup(props, { slots }) {
        return () => h('button', { onClick: props.onClick }, slots);
    }
});

const clickezMoi = () => {
    alert('On m`a cliqué');
}

//export {FunctionnalButton} <- si déclaré dans un fichier javascript

</script>