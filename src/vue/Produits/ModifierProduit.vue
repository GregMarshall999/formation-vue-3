<template>

<FormProduit v-if="produit" @envoyer="envoyerProduit" v-model="produit" :param="prod" :mode="true" />

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
    props: {
        id: String
    },
    components: {
        FormProduit
    }, 
    computed: {
        ...mapGetters('produitStore', { produit: 'getProduitUnique' })
    }, 
    methods: {
        ...mapActions('produitStore', ['modifierProduit' , 'chargerProduit']),
        envoyerProduit(p) {
            this.modifierProduit(this.id, p);

            this.$router.push({ path: '/produits' })
        }
    }, 
    created() {
        this.chargerProduit(this.id)
    }
}

</script>