import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-petrolearns.onrender.com/api' || 'http://localhost:5000/api',
  withCredentials: true,
});

export default api;
