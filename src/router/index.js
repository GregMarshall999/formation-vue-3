import { createRouter, createWebHistory } from "vue-router"

import Exercice_01 from '@/vue/Exercice_01.vue';
import Exercice_02 from '@/vue/Exercice_02.vue';

import LiaisonFormulaire from '@/vue/LiaisonFormulaire.vue';
import RenduConditionnel from '@/vue/RenduConditionnel.vue';
import RenduListe from '@/vue/RenduListe.vue';
import PropCalculee from '@/vue/PropCalculee.vue';
import LifeCycle from '@/vue/LifeCycle.vue';
import Watchers from '@/vue/Watchers.vue';
import Props from '@/vue/Props.vue';
import Emits from '@/vue/Emits.vue';
import Slots from '@/vue/Slots.vue';

const routes = [
    {
        path: '/liaisonFormulaire', 
        name: 'Liaison', 
        component: LiaisonFormulaire
    },
    {
        path: '/renduConditionnel', 
        name: 'RenduCond', 
        component: RenduConditionnel
    },
    {
        path: '/eenduListe', 
        name: 'RenduListe', 
        component: RenduListe
    },
    {
        path: '/propCalculee', 
        name: 'PropCalculee', 
        component: PropCalculee
    },
    {
        path: '/lifeCycle', 
        name: 'LifeCycle', 
        component: LifeCycle
    },
    {
        path: '/watchers', 
        name: 'Watchers', 
        component: Watchers
    },
    {
        path: '/props', 
        name: 'Props', 
        component: Props
    },
    {
        path: '/emits', 
        name: 'Emits', 
        component: Emits
    },
    {
        path: '/slots', 
        name: 'Slots', 
        component: Slots
    },

    {
        path: '/exercice_01', 
        name: 'Exercice_01', 
        component: Exercice_01
    },
    {
        path: '/exercice_02', 
        name: 'Exercice_02', 
        component: Exercice_02
    },
]

const router = createRouter({ 
    history: createWebHistory(),
    routes
})

export default router