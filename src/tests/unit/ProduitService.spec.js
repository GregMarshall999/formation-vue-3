import { describe, it, expect, beforeEach, afterEach } from "vitest";
import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import { getProduits } from '@/services/ProduitService'

describe('produitService', () => {
    let mock;

    beforeEach(() => {
        mock = new MockAdapter(axios)
    })

    afterEach(() => {
        mock.restore();
    })

   it('Recuperer tout les produits', async () => {
       const produits = [
           {
             id: "87b2",
             nom_produit: "Casquette",
             prix_unite: 10,
             qte_stock: 200,
             solde: true
           }, 
           {
            id: "0ec0",
            nom_produit: "Chaussures",
            prix_unite: 10,
            qte_stock: 100,
            en_solde: ""
          }
       ]

       mock.onGet('http://localhost:3000/produits').reply(200, produits)

       const result = await getProduits()

       expect(result.data).toEqual(produits);
   })
})