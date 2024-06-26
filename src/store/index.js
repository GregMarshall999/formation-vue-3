import { createStore } from 'vuex';
import produitStore from '@/store/produitStore'

export const state = {
    variableStore: 'Texte', 
    test: null
}

export const getters = {
    getVariableStore(state) {
        return state.variableStore;
    }, 
    getTest(state) {
        return state.test
    }
}

export const mutations = {
    SET_TEXTE(state) {
        state.variableStore = 'Texte Set';
    },

    CHANGER_TEXTE(state, v) {
        state.variableStore = v;
    }
}

export const actions = {
    modifierTexte({ commit }, valeur) {
        console.log('modifier')
        commit('CHANGER_TEXTE', valeur);
    },

    setTexte({ commit }) {
        commit('SET_TEXTE');
    }
}

const store = createStore({
    modules: {
        produitStore
    },
    state, 
    getters, 
    mutations, 
    actions
});

export default store;