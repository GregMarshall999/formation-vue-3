import axios from "axios";

const API_ENDPOINT = "http://localhost:3000/utilisateurs";

export async function insrire(utilisateur) {
    return await axios.post(API_ENDPOINT, utilisateur);
}

export async function getByEmail(email) {
    return await axios.get(`${API_ENDPOINT}?email=${email}`);
}