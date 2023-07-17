import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

function getProducts() {
    const token = localStorage.getItem("token")

    const header = {
        headers: { "Authorization": `Bearer ${token}` }
    }

    const promise = axios.get(`${apiURL}/produtos/todos`, header)
    return promise;
};

function getProductsByCategory(categoria) {
    const token = localStorage.getItem("token")

    const header = {
        headers: { "Authorization": `Bearer ${token}` }
    }

    const promise = axios.get(`${apiURL}/categoria/${categoria}`, header)
    return promise
}

const apiProducts = { getProducts, getProductsByCategory };
export default apiProducts;
