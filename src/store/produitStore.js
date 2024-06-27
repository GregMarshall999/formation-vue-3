import { getProduits, getProduit, postProduit } from '@/services/ProduitService'

export const state = {
    produits: [], 
    produit: null
}

export const getters = {
    getProduits(state) {
        return state.produits;
    },
    getProduit(state, index) {
        return state.produits[index];
    }, 
    getProduitUnique(state) {
        return state.produit
    }
}

export const mutations = {
    SET_PRODUITS(state, produits) {
        state.produits = produits;
    },
    ADD_PRODUIT(state, produit) {
        state.produits.push(produit);
    },
    SET_PRODUIT(state, produit) {
        state.produit = produit;
    }, 
    RESET_PRODUITS(state) {
        state.produits = []
    }
}

export const actions = {
    setProduits({ commit }, produits) {
        commit('SET_PRODUITS', produits);
    }, 
    addProduit({ commit }, produit) {
        commit('ADD_PRODUIT', produit);
    }, 
    chargerProduits({ commit }) {
        getProduits().then(reponse => {
            commit('SET_PRODUITS', reponse.data);
        }).catch(e => {
            console.error(e)
        });
    }, 
    chargerProduit({ commit }, id) {
        getProduit(id).then(r => {
            commit('SET_PRODUIT', r.data)
        }).catch(e => console.log(e))
    }, 
    ajouterProduit({ commit }, produit) {
        postProduit(produit).then(r => {
        })
    }, 
    resetProduits({ commit }) {
        commit('RESET_PRODUITS')
    }
}

export default {
    namespaced: true,
    state, 
    getters, 
    mutations, 
    actions
};