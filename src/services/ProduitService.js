import axios from 'axios';

const API_ENDPOINT = "http://localhost:3000/produits";

export async function getProduits() {
    return await axios.get(API_ENDPOINT);
}

export async function getProduit(id) {
    return await axios.get(API_ENDPOINT + '/' + id)
}

export async function postProduit(produit) {
    return await axios.post(API_ENDPOINT, produit)
}