import { insrire, getByEmail } from "@/services/UtilisateurService"

export const state = {
    utilisateur: null
}

export const getters = {
    getUtilisateur(state) {
        return state.utilisateur;
    }
}

export const mutations = {
    SET_UTILISATEUR(state, utilisateur) {
        state.utilisateur = utilisateur
    }, 
    RESET_UTILISATEUR(state) {
        state.utilisateur = null
    }
}

export const actions = {
    inscrireUtilisateur({ commit }, utilisateur) {
        insrire(utilisateur)
    }, 
    connexion({ commit }, utilisateur) {
        getByEmail(utilisateur.email).then(r => {
            if(utilisateur.mdp === r.data[0].mdp) {
                commit('SET_UTILISATEUR', r.data)
            }
        })
    }, 
    resetUtilisateur({ commit }) {
        commit('RESET_UTILISATEUR');
    }
}

export default {
    namespaced: true, 
    state, 
    getters, 
    mutations, 
    actions
}