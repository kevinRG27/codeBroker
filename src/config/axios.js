import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : 'localhost:3001'
});

export default clienteAxios;