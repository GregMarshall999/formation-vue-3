<template>

<button @click="mode = false">Ajouter produit</button>

<Tableau 
    @details="p => detail = p"
    @editer="editer"
    @supprimer="retirerProduit" 
    :contenu="produits" />

<label>Ajouter un Element</label>
<FormProduit @envoyer="ajouter" v-model="prod" :param="prodStruct" :mode="mode" />

<label>Détails Produit</label>
<Détails :produit="detail" :param="prodStruct"/>

</template>

<script>
import Tableau from '@/components/crud/Tableau.vue';
import FormProduit from '@/components/crud/FormProduit.vue';
import Détails from '@/components/crud/Détails.vue';

export default {
    data() {
        return {
            produits: [], 
            prodStruct: [
                {key: 'id', type: 'number'},
                {key: 'nom_produit', type: 'text'}, 
                {key: 'prix_unite', type: 'number'}, 
                {key: 'qte_stock', type: 'number'}, 
                {key: 'en_solde', type: 'checkbox'}
            ], 
            detail: null, 
            prod: null, 
            mode: false
        }
    },  
    components: {
        Tableau, 
        FormProduit, 
        Détails
    }, 
    methods: {
        ajouter(p) {
            const temp = Object.assign({}, p);

            this.produits.push(temp);
        }, 
        retirerProduit(id) {
            const indice = this.produits[id] - 1
            this.produits.splice(indice, 1);
        }, 
        editer(p) {
            this.mode = true;
            this.prod = p
        }
    }
}

</script>