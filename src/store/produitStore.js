import * as produitService from '@/services/ProduitService'

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
    }, 
    RESET_PRODUIT(state) {
        state.produit = null
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
        produitService.getProduits().then(reponse => {
            commit('SET_PRODUITS', reponse.data);
        }).catch(e => {
            console.error(e)
        });
    }, 
    chargerProduit({ commit }, id) {
        produitService.getProduit(id).then(r => {
            commit('SET_PRODUIT', r.data)
        }).catch(e => console.log(e))
    }, 
    ajouterProduit({ _, dispatch }, produit) {
        produitService.postProduit(produit).then(r => {
            dispatch('chargerProduits');
        })
    }, 
    modifierProduit({ commit, dispatch }, produit) { //utiliser ID de produit
        produitService.putProduit(produit.id, produit).then(r => {
            dispatch('chargerProduits');
        })
    }, 
    retirerProduit({ commit, dispatch }, id) {
        produitService.deleteProduit(id).then(_ => {
            dispatch('chargerProduits');
        })
    },
    resetProduits({ commit }) {
        commit('RESET_PRODUITS')
    }, 
    resetProduit({ commit }) {
        commit('RESET_PRODUIT')
    }
}

export default {
    namespaced: true,
    state, 
    getters, 
    mutations, 
    actions
};