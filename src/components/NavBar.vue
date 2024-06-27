<template>
    <nav>
        <router-link :to="'/textDeclaratif'">Texte Déclaratif</router-link> |
        <router-link :to="'/liaisonFormulaire'">Liaison Formulaires</router-link> |
        <router-link :to="{ name: 'RenduCond' }">Rendu Conditionnel</router-link> |
        <router-link :to="{ name: 'RenduListe' }">Rendu Liste</router-link> |
        <router-link :to="{ name: 'PropCalculee' }">Prop Calculee</router-link> |
        <router-link :to="{ name: 'LifeCycle' }">Life Cycle</router-link> |
        <router-link :to="{ name: 'Watchers' }">Watchers</router-link> |
        <router-link :to="{ name: 'Props' }">Props</router-link> |
        <router-link :to="{ name: 'Emits' }">Emits</router-link> |
        <router-link :to="{ name: 'Slots' }">Slots</router-link> |
        <router-link :to="{ name: 'Exercice_01' }">Exercice_01</router-link> |
        <router-link :to="{ name: 'Exercice_02' }">Exercice_02</router-link> | 
        <router-link :to="{ name: 'ExempleForm' }">Exemple Formulaire</router-link> |
        <router-link :to="{ name: 'PropsRoutes' }">Props Routes</router-link> | 
        <router-link :to="{ name: 'CRUD' }">Exercice CRUD</router-link> |
        <router-link :to="{ name: 'Store' }">Store</router-link> |
        <router-link :to="{ name: 'Axios' }">Axios</router-link> | 
        <router-link :to="{ name: 'Produits' }">Produit</router-link> 
    </nav>
</template>