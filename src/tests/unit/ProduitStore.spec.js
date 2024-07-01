import { describe, it, expect, beforeEach, afterEach } from "vitest";
import produitStore from "@/store/produitStore";
import Vuex from 'vuex'

describe('produitStore', () => {
    let store;
    let produits;
    let produit;

    beforeEach(() => {
        store = new Vuex.Store({
            modules: {
                produit: produitStore
            }
        })

        produit = {
            id: "87b2",
            nom_produit: "Casquette",
            prix_unite: 10,
            qte_stock: 200,
            solde: true
          }

        produits = [{
            id: "87b2",
            nom_produit: "Casquette",
            prix_unite: 10,
            qte_stock: 200,
            solde: true
          }]
    })

    afterEach(() => {
        store.state.produit.produits = []
        store.state.produit.produit = null
    })

    it('Recuperation produit', () => {
        store.state.produit.produits = produits
        
        expect(store.getters['produit/getProduits']).toEqual(produits);
    })

    it('Store Initialisé', () => {
        expect(store.state.produit.produits).toEqual([]);
        expect(store.state.produit.produit).toBeNull();
    })

    it('mutation set produit', () => {
        

        store.commit('produit/SET_PRODUIT', produit)
        expect(store.state.produit.produit).toEqual(produit);
    })

    //it('get produit index', async () => {
    //    produitService.getProduit.mockResolvedValue(produits[0]);
    //    await store.dispatch('produit/chargerProduit', "87b2");
    //    expect(store.state.produit.produit).toEqual(produit)
    //})
})