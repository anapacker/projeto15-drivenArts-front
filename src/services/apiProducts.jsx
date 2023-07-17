import axios from "axios";
import createConfig from "./createConfig";

const apiURL = import.meta.env.VITE_API_URL;


function getProducts(token) {

    const promise = axios.get(`${apiURL}/produtos/todos`, token)
        .then(res => res.data)
        .catch(error => {
            alert(error.response.data)
        }) 
    return promise;
};


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


const apiProducts = { getProducts, getProduct, getProductsList};
export default apiProducts;