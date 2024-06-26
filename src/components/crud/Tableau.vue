<template>
    <p v-if="contenu.length == 0">Le tableau est vide</p>

    <table>
        <thead>
            <th>Nom Produit</th>
            <th>Prix Unité</th>
            <th>Actions</th>
        </thead>
        <tbody>
            <tr v-for="c in contenu">
                <td>{{ c.nom_produit }}</td>
                <td>{{ c.prix_unite }}</td>
                <td>
                    <button @click="$emit('details', c)">Détails</button>
                    <button @click="$emit('editer', c)">Editer</button>
                    <button @click="$emit('supprimer', c.id)">Supprimer</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>

export default {
    emits: ['details', 'editer', 'supprimer'],
    props: {
        contenu: Array
    }
}

</script>