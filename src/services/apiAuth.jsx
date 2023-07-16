import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

function login(body) {
    const promise = axios.post(`${apiURL}/sign-in`, body);
    return promise;
};

function signup(body) {
    const promise = axios.post(`${apiURL}/signup`, body);
    return promise;
}

const apiAuth = { login, signup };
export default apiAuth;