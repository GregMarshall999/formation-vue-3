<template>
<button @click="chargerProduits">Get Produits</button>

<button @click="chargerProduit(1)">Get Produit</button>

<br>
Produits: {{ produits }}

produit: {{ produit }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('produitStore', { produits: 'getProduits', produit: 'getProduitUnique' })
    },
    methods: {
        ...mapActions('produitStore', ['chargerProduits', 'chargerProduit'])
    }
}

</script>