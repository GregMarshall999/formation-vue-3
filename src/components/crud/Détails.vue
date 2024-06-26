<template>
    <div v-if="produit" v-for="p in param">
        <label>{{ p.key }}</label>
        <p>{{ produit[p.key] }}</p>
    </div>
</template>

<script>

export default {
    props: {
        produit: Object, 
        param: Array
    }
}

</script>