<template>
{{ variable }}
<button @click="variable = 'test bouton'">click</button>

<h2>Template Ref</h2>
<p ref="refAcceuil">Bonjour</p>
</template>

<script>

export default {
    data() {
        return {
            variable: 'Variable'
        }
    }, 
    beforeCreate() {
        console.log('Before Create', this.variable);
    }, 
    created() {
        console.log('Created', this.variable);
    }, 
    beforeMount() {
        console.log('Before Mount');
    }, 
    mounted() {
        setTimeout(() => {
            console.log('Mounted');
            this.variable = 'Test'
            console.log(this.$refs.refAcceuil);
            this.$refs.refAcceuil.textContent = 'La page est prête!';
            this.$refs.refAcceuil.ariaLabel = 'Affichage de l`état de la page';
        }, 5000);
    }, 
    beforeUpdate() {
        console.log('Before Update', this.variable);
        //this.variable = 'other value'
    }, 
    updated() {
        console.log('Updated', this.variable);
        //this.variable = 'value'
    }
}

</script>