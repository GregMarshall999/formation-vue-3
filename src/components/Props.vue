<template>
Je suis un composant Enfant
<h2>{{ message || 'Aucun message n`a été passé en tant que propriété' }}</h2>
</template>

<script>

export default {
    props: {
        message: String
    }
}

</script>