import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-petrolearns.onrender.com/api' ,
  withCredentials: true,
});

export default api;
