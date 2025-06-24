import axios from 'axios';
import Cookies from 'js-cookie';

const reqCookies = Cookies.get("XSRF-TOKEN");

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL, // Replace this with your API base URL
  // timeout: 1000, 
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'X-XSRF-TOKEN': reqCookies,
  },
  withCredentials: true,
  withXSRFToken: true,
});

export default api;
