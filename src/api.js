import axios from 'axios';

const api = axios.create({
    baseURL: "https://projeto-petiko-node.onrender.com",
});

export default api;