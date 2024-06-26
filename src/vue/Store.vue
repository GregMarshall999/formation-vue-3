<template>
{{ variableStore }}

<button @click="modifierTexte('test')">Action</button>
<button @click="setTexte">Set</button>

<h2>Produits du store</h2>
{{ produits }}

<button @click="addProduit(null)">Test</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters({ variableStore: 'getVariableStore', t: 'getTest' }),
        ...mapGetters('produitStore', { produits: 'getProduits' })
    }, 
    methods: {
        ...mapActions(['modifierTexte', 'setTexte']), 
        ...mapActions('produitStore', ['setProduits', 'addProduit'])
    }
}

</script>