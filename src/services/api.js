import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wazex.herokuapp.com',
});

export default api;
