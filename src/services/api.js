import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wazex-backend.herokuapp.com/devs',
});

export default api;
