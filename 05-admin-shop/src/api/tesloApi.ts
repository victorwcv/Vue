import axios from 'axios';

const baseURL = import.meta.env.VITE_TESLO_API_URL;

const tesloApi = axios.create({
  baseURL,
});

tesloApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// TODO: Interceptors

export { tesloApi };
