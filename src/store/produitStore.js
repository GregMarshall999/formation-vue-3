export const state = {
    produits: [{ key: 'produit 1' }]
}

export const getters = {
    getProduits(state) {
        return state.produits;
    },
    getProduit(state, index) {
        return state.produits[index];
    }
}

export const mutations = {
    SET_PRODUITS(state, produits) {
        state.produits = produits;
    },
    ADD_PRODUIT(state, produit) {
        state.produits.push(produit);
    }
}

export const actions = {
    setProduits({ commit }, produits) {
        commit('SET_PRODUITS', produits);
    }, 
    addProduit({ commit }, produit) {
        commit('ADD_PRODUIT', produit);
    }
}

export default {
    namespaced: true,
    state, 
    getters, 
    mutations, 
    actions
};