import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

function login(body) {
    const promise = axios.post(`${apiURL}/sign-in`, body)
        .then(res => res.data)
        .catch(error => {
            alert(error.response.data)
        })
    return promise;
};


const apiAuth = { login };
export default apiAuth;