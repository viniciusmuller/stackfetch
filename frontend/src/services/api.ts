import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8393'
})

export default api;
