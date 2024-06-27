<template>

<router-link :to="{ name: 'CreerProduits' }"><button>Créer Produit</button></router-link>

<Tableau @details="p => naviger('DetailsProduits', p)" @editer="p => naviger('ModifierProduits', p)" @supprimer="retirerProduit" :contenu="produits" />

</template>

<script>
import Tableau from '@/components/crud/Tableau.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            prod: [
                { key: 'nom_produit', type: 'text', value: '' }, 
                { key: 'prix_unite', type: 'number', value: '' }, 
                { key: 'qte_stock', type: 'number', value: '' }, 
                { key: 'solde', type: 'checkbox', value: '' }
            ]
        }
    }, 
    components: {
        Tableau
    }, 
    computed: {
        ...mapGetters('produitStore', { produits: 'getProduits' })
    }, 
    methods: {
        ...mapActions('produitStore', ['chargerProduits', 'resetProduits', 'retirerProduit']), 
        naviger(page, produit) {
            this.$router.push({ name: page, params: { id: produit.id } })
        }
    },
    created() {
        this.chargerProduits();
    }, 
    beforeUnmount() {
        this.resetProduits();
    }
}

</script>