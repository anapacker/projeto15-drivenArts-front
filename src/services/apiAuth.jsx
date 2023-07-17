import axios from "axios";
import createConfig from "./createConfig";

const apiURL = import.meta.env.VITE_API_URL;

function login(body) {
    const promise = axios.post(`${apiURL}/sign-in`, body);
    return promise;
};

function signup(body) {
    const promise = axios.post(`${apiURL}/signup`, body);
    return promise;
}

function signout(token){
    const config = createConfig(token);
    const promise = axios.delete(`${apiURL}/log-out`, config);
    return promise;
}

const apiAuth = { login, signup, signout };
export default apiAuth;