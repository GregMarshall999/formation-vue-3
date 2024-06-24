<template>

    <ul>
        <li>ID: {{ todo[0].id }} | Contenu: {{ todo[0].text }}</li>
        <li>ID: {{ todo[1].id }} | Contenu: {{ todo[1].text }}</li>
    </ul>

    <h3>Avec v-for</h3>
    <ul>
        <li v-for="t in todo" :key="t.id">
            ID: {{ t.id }} | Contenu: {{ t.text }}
        </li>
    </ul>

    <h3>Taches</h3>
    <form @submit.prevent="ajouterTache">
        <input v-model="newTache" required placeholder="Nouvelle Tache"/>
        <button>Ajouter</button>
    </form>
    <ul>
        <li v-for="t in taches" :key="t.id">
            ID: {{ t.id }} | Contenu: {{ t.text }}
            <button @click="retirerTache(t)">X</button>
        </li>
    </ul>

</template>

<script>

export default {
    data() {
        return {
            todo: [
                { id: 0, text: 'Apprendre Vue.js' }, 
                { id: 1, text: 'Installer Vue.js' }, 
                { id: 2, text: 'Créer application Vue.js' }
            ], 
            taches: [], 
            newTache: null, 
            id: 0
        }
    }, 
    methods: {
        ajouterTache() {
            this.taches.push({ id: this.id++, text: this.newTache });
            this.newTache = '';
        }, 
        retirerTache(tache) {
            this.taches = this.taches.filter(t => t !== tache);
            //this.taches = this.taches.filter(t => {
            //    return t !== tache
            //});
        }
    }
}

</script>