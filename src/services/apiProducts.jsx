import axios from "axios";
import createConfig from "./createConfig";

const apiURL = import.meta.env.VITE_API_URL;


function getProducts() {

    const promise = axios.get(`${apiURL}/produtos/todos`)
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



const apiProducts = { getProducts, getProduct};
export default apiProducts;