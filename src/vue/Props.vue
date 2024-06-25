<template>
Je suis un composant Enfant
<h2>{{ message || 'Aucun message n`a été passé en tant que propriété' }}</h2>

<Emits @reponse="m => msg = m" />
{{ msg }}

</template>

<script>
import Emits from '@/vue/Emits.vue'

export default {
    data() {
        return {
            msg: ''
        }
    },
    components: {
        Emits
    },  
    props: {
        message: String
    }
}

</script>