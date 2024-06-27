<template>

<Détails :produit="produit" :param="prod"/>

<router-link :to="{ name: 'Produits' }"><button>Retour</button></router-link>

</template>

<script>
import Détails from '@/components/crud/Détails.vue';
import { mapGetters, mapActions } from 'vuex';
 
export default {
    data() {
        return {
            prod: [
                { key: 'nom_produit', type: 'text' }, 
                { key: 'prix_unite', type: 'number' }, 
                { key: 'qte_stock', type: 'number' }, 
                { key: 'solde', type: 'checkbox' }
            ]
        }
    },
    props: {
        id: String
    }, 
    components: {
        Détails
    }, 
    computed: {
        ...mapGetters('produitStore', { produit: 'getProduitUnique' })
    }, 
    methods: {
        ...mapActions('produitStore', ['chargerProduit', 'resetProduit'])
    }, 
    created() {
        this.chargerProduit(this.id);
    }, 
    beforeUnmount() {
        this.resetProduit();
    }
}

</script>