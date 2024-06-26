<template>

<form @submit.prevent="envoyer">

    <div v-for="c in paramChamp">
        <label>Votre {{ c.key }}:</label>

        <input v-model="modelValue[c.key]" :type="c.type"/>
    </div>

    <!--Exemple a la main
    
    <div>
        <label>Votre Nom:</label>
        <input v-model="contenu.nom" type="text" />
    </div>
    
    <div>
        <label>Votre Prénom:</label>
        <input v-model="contenu.prenom" type="text" />
    </div>

    <div>
        <label>Votre age:</label>
        <input v-model="contenu.age" type="number" />
    </div>

    <div>
        <label>Votre Participation:</label>
        <input v-model="contenu.participation" type="checkbox" />
    </div>-->
    

    <button>{{ mode ? 'Créer' : 'Modifier' }}</button>
</form>

</template>

<script>

export default {
    props: {
        mode: {
            type: Boolean, 
            //required: true, 
            default: true
        }, 
        paramChamp: Object, 
        modelValue: Object
    }, 
    methods: {
        envoyer() {
            console.log(this.modelValue);
        }
    }, 
    mounted() {
        console.log(this.modelValue['nom']);

        console.log(this.mode);
        //console.log(this.contenu)
        //console.log(this.contenu['nom'].name)
    }
}

</script>