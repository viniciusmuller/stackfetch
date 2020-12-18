import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? '/api/v1'
      : 'http://localhost:3333/api/v1',
});

export default api;
