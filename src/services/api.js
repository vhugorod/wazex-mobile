import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wazex-backend.herokuapp.com',
});

export default api;
