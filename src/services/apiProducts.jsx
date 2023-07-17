import axios from "axios";
import createConfig from "./createConfig";

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


function getProduct(id, token){
    const promise = axios.get(`${apiURL}/produto/${id}`,createConfig(token));
    return promise;
}



function getProductsList(token) {

    const promise = axios.get(`${apiURL}/produtos/todos`, token)
        .then(res => {
            const productsList = res.data;
            console.log(productsList);
            return productsList;
        })
        .catch(error => {
            alert(error.response.data)
        }) 
    return promise;
};
const apiProducts = { getProducts, getProductsByCategory, getProduct,getProductsList};
export default apiProducts;

