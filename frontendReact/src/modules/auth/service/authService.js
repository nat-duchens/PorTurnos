// src/services/auth/authService.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_API;


export const register = async (userData) => {

  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, userData);
    return response;
  } catch (error) {
    console.error('Error in register:', error);
    throw error.response.data || { message: 'Error desconocido' };
  }

};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, userData);
    return response;
  } catch (error) {
    console.error('Error in login:', error);
    throw error.response.data || { message: 'Error desconocido' };
  }

};



export const requestTokenPasswordReset = async (email) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/forgot-password`, { email });
    return response; 
  } catch (error) {
    console.error('Error in requestTokenPasswordReset:', error);
    throw error.response.data || { message: 'Error desconocido' };
  }
};