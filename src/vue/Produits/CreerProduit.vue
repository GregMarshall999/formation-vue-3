<template>

<FormProduit @envoyer="envoyerProduit" v-model="produit" :param="prod" />

<router-link :to="{ name: 'Produits' }"><button>Retour</button></router-link>

</template>

<script>
import FormProduit from '@/components/crud/FormProduit.vue';
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
    components: {
        FormProduit
    }, 
    computed: {
        ...mapGetters('produitStore', { produit: 'getProduitUnique' })
    }, 
    methods: {
        ...mapActions('produitStore', ['ajouterProduit']),
        envoyerProduit(p) {
            delete p.id;

            this.ajouterProduit(p);

            this.$router.push({ path: '/produits' })
        }
    }
}

</script>