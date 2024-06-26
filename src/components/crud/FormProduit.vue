<template>
    <form @submit.prevent="send">
        <div v-for="p in param">
            <label v-if="p.key !== 'id'">Entrez {{ p.key }}</label>
            <input v-if="p.key !== 'id' && !mode" v-model="produit[p.key]" :type="p.type"/>
            <input v-if="p.key !== 'id' && mode" v-model="modelValue[p.key]" :type="p.type"/>
        </div>

        <button v-if="!mode">Créer</button>
    </form>
</template>

<script>
let id = 0;

    export default {
        data() {
            return {
                produit: {
                    id: '',
                    nom_produit:'',
                    prix_unite:'',
                    qte_stock:'',
                    en_solde:''
                }
            }
        },
        emits: ['envoyer'], 
        props: {
            mode: Boolean, 
            param: Array, 
            modelValue: Object
        }, 
        methods: {
            send() {
                if(!this.mode) {
                    this.produit['id'] = id++;
                    this.$emit('envoyer', this.produit);
                }
            }
        }
    }
</script>