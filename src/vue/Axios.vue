<template>
<button @click="chargerProduits">Get Produits</button>

<button @click="chargerProduit(1)">Get Produit</button>

<br>
Produits: {{ produits }}

produit: {{ produit }}

<br>
<FormProduit @envoyer="ajouter" v-model="prod" :param="prodStruct" :mode="false" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FormProduit from '@/components/crud/FormProduit.vue';

export default {
    data() {
        return {
            prodStruct: [
                {key: 'nom_produit', type: 'text'}, 
                {key: 'prix_unite', type: 'number'}, 
                {key: 'qte_stock', type: 'number'}, 
                {key: 'solde', type: 'checkbox'}
            ], 
            prod: null
        }  
    },
    components: {
        FormProduit
    },
    computed: {
        ...mapGetters('produitStore', { produits: 'getProduits', produit: 'getProduitUnique' })
    },
    methods: {
        ...mapActions('produitStore', ['chargerProduits', 'chargerProduit', 'ajouterProduit']), 
        ajouter(p) {
            this.ajouterProduit(p)
        }
    }
}

</script>