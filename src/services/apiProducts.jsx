import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

function getProducts() {

    const promise = axios.get(`${apiURL}/produtos/todos`)
        .then(res => res.data)
        .catch(error => {
            alert(error.response.data)
        }) 
    return promise;
};

const apiProducts = { getProducts };
export default apiProducts;