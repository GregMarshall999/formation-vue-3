<template>
    <h3>Taches</h3>
    <form @submit.prevent="ajouterTache">
        <input v-model="newTache" required placeholder="Nouvelle Tache"/>
        <button>Ajouter</button>
    </form>
    <ul>
        <li v-for="t in filtrerTaches" :key="t.id">
            <input v-model="t.done" type="checkbox"/>
            <span :class="{ done: t.done }">ID: {{ t.id }} | Contenu: {{ t.text }}</span>
            <button @click="retirerTache(t)">X</button>
        </li>
    </ul>
    <button @click="cacher = !cacher">
        {{ cacher ? 'Afficher toutes les taches' : 'Cacher les taches complétés' }}
    </button>
</template>

<script>
let id = 0;

export default {
    data() {
        return {
            taches: [
                { id: id++, text: 'Apprendre le HTML', done: true },
                { id: id++, text: 'Apprendre le JavaScript', done: true },
                { id: id++, text: 'Apprendre Vue', done: false }
            ], 
            newTache: null, 
            cacher: false
        }
    }, 
    computed: {
        filtrerTaches() {
            return this.cacher ? 
                this.taches.filter(t => !t.done) 
                : this.taches;
        }
    },
    methods: {
        ajouterTache() {
            this.taches.push({ id: id++, text: this.newTache });
            this.newTache = '';
        }, 
        retirerTache(tache) {
            this.taches = this.taches.filter(t => t !== tache);
        }
    }
}

</script>

<style>

.done {
    text-decoration: line-through;
}

</style>