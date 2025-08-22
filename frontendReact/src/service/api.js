// src/service/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_API;

const api = axios.create({
  baseURL: API_URL,
});

// Interceptor para agregar el token a cada solicitud
api.interceptors.request.use(
  (config) => {
    // CORREGIDO: Buscar el token donde lo guarda AuthContext
    const token = localStorage.getItem('userToken'); // Directamente el token
    
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de respuesta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Limpiar AMBOS tokens del almacenamiento
      localStorage.removeItem('userData');
      localStorage.removeItem('userToken'); // AÑADIDO
      sessionStorage.removeItem('userData');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;