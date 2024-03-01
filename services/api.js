import axios from 'axios';

// por segurança nao coloquei a baseURL e seus devidos headers publicamente
export const api  = axios.create({
    baseURL: '',
    headers: {
        apikey: '',
        authorization: ''
    }
})