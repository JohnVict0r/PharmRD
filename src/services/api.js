import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.4.42.225:8000/api',
});

export default api;
