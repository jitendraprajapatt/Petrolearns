import axios from 'axios';

const api = axios.create({
<<<<<<< HEAD
  baseURL:  'http://localhost:5000/api', // your backend URL
=======
  baseURL: 'https://backend-petrolearns.onrender.com/api' || 'http://localhost:5000/api', // your backend URL
>>>>>>> 491c8db1987359b82527269c16b90f80ab74c302
  withCredentials: true, // 👈 VERY IMPORTANT
});

export default api;
