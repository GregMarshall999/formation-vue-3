import { createRouter, createWebHistory } from "vue-router"

import Exercice_01 from '@/vue/Exercice_01.vue';
import Exercice_02 from '@/vue/Exercice_02.vue';

import TexteDeclaratif from '@/vue/TexteDeclaratif.vue';
import LiaisonFormulaire from '@/vue/LiaisonFormulaire.vue';
import RenduConditionnel from '@/vue/RenduConditionnel.vue';
import RenduListe from '@/vue/RenduListe.vue';
import PropCalculee from '@/vue/PropCalculee.vue';
import LifeCycle from '@/vue/LifeCycle.vue';
import Watchers from '@/vue/Watchers.vue';
import Props from '@/vue/Props.vue';
import Emits from '@/vue/Emits.vue';
import Slots from '@/vue/Slots.vue';
import PropsRoutes from '@/vue/PropsRoutes.vue';
import Details from '@/vue/Details.vue';
import CRUD from '@/vue/CRUD.vue';
import Store from '@/vue/Store.vue';

import ExempleForm from '@/vue/ExempleFormulaire/ExempleForm.vue';

const routes = [
    {
        path: '/textDeclaratif', 
        name: 'textDeclaratif', 
        component: TexteDeclaratif
    },
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
    {
        path: '/exempleForm',
        name: 'ExempleForm',
        component: ExempleForm
    }, 
    {
        path: '/propsRoutes', 
        name: 'PropsRoutes', 
        component: PropsRoutes
    }, 
    {
        path: '/exempleDetails/:id/:nom', 
        name: 'ExDetails', 
        component: Details, 
        props: true
    },
    {
        path: '/crud', 
        name:'CRUD', 
        component: CRUD
    }, 
    {
        path: '/store', 
        name:'Store', 
        component: Store
    }
]

const router = createRouter({ 
    history: createWebHistory(),
    routes
})

export default router