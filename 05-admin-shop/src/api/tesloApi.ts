import axios from 'axios';

const baseURL = import.meta.env.VITE_TESLO_API_URL;

const tesloApi = axios.create({
  baseURL,
});

// TODO: Interceptors

export { tesloApi };
