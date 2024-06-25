<template>
<button @click="compte++">compter</button>

<h2>Exemple avec des taches</h2>
<p>Id de la tache récupéré: {{ tacheId }}</p>
<button @click="tacheId++">Récuperer une tache</button>

<p v-if="!tache">Chargement de la tache en cours...</p>
<p v-else>{{ tache }}</p>
</template>

<script>

export default {
    data() {
        return {
            compte: 0, 
            tacheId: 1, 
            tache: null
        }
    }, 
    watch: {
        compte(newCompte, oldCompte) {
            console.log('ancien compte:', oldCompte, ' | nouveau compte:', newCompte);
        },
        tacheId() {
            this.fetchTache();
        }
    }, 
    methods: {
        async fetchTache() {
            const reponse = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${this.tacheId}`
            );
            
            //'https://jsonplaceholder.typicode.com/todos/' + this.tacheId meme chose
            //console.log(reponse)

            this.tache = await reponse.json();
        }
    }
}

</script>