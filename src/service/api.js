import axios from 'axios'
const api = axios.create({
    baseURL: "http://localhost"
    //baseURL: "https://app.leadmark.com.br"
    //baseURL: "https://integracao.leadmark.com.br"
    //baseURL: "http://localhost:8000"
    //baseURL: "https://955c-170-0-38-183.ngrok.io"
})
export default api;
