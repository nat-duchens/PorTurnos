// src/modules/blogs/service/blogService.js
import axios from 'axios';
import posts from '../utils/dummyData';

const API_URL = import.meta.env.VITE_BACKEND_API;

// Función para obtener todos los blogs
export const getAllBlogs = async () => {
  try {
    // En un entorno real, esto haría una llamada a la API
    // const response = await axios.get(`${API_URL}/api/blogs`);
    // return response.data;
    
    // Por ahora, devolvemos los datos dummy
    return posts;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error.response?.data || { message: 'Error desconocido al obtener blogs' };
  }
};

// Función para obtener un blog por su slug
export const getBlogBySlug = async (slug) => {
  try {
    // En un entorno real, esto haría una llamada a la API
    // const response = await axios.get(`${API_URL}/api/blogs/${slug}`);
    // return response.data;
    
    // Por ahora, buscamos en los datos dummy
    const blog = posts.find(post => post.slug === slug);
    if (!blog) {
      throw new Error('Blog no encontrado');
    }
    return blog;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error.response?.data || { message: 'Error desconocido al obtener el blog' };
  }
};

// Función para crear un nuevo blog
export const createBlog = async (blogData) => {
  try {
    // Verificar que el usuario está autenticado
    const token = localStorage.getItem('userToken');
    if (!token) {
      throw new Error('Usuario no autenticado');
    }
    
    // En un entorno real, esto haría una llamada a la API
    // const response = await axios.post(`${API_URL}/api/blogs`, blogData, {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // });
    // return response.data;
    
    // Por ahora, simulamos una respuesta exitosa
    return {
      success: true,
      message: 'Blog creado exitosamente',
      data: blogData
    };
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error.response?.data || { message: 'Error desconocido al crear el blog' };
  }
};

// Función para actualizar un blog existente
export const updateBlog = async (slug, blogData) => {
  try {
    // Verificar que el usuario está autenticado
    const token = localStorage.getItem('userToken');
    if (!token) {
      throw new Error('Usuario no autenticado');
    }
    
    // En un entorno real, esto haría una llamada a la API
    // const response = await axios.put(`${API_URL}/api/blogs/${slug}`, blogData, {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // });
    // return response.data;
    
    // Por ahora, simulamos una respuesta exitosa
    return {
      success: true,
      message: 'Blog actualizado exitosamente',
      data: { ...blogData, slug }
    };
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error.response?.data || { message: 'Error desconocido al actualizar el blog' };
  }
};

// Función para eliminar un blog
export const deleteBlog = async (slug) => {
  try {
    // Verificar que el usuario está autenticado
    const token = localStorage.getItem('userToken');
    if (!token) {
      throw new Error('Usuario no autenticado');
    }
    
    // En un entorno real, esto haría una llamada a la API
    // const response = await axios.delete(`${API_URL}/api/blogs/${slug}`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // });
    // return response.data;
    
    // Por ahora, simulamos una respuesta exitosa
    return {
      success: true,
      message: 'Blog eliminado exitosamente'
    };
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error.response?.data || { message: 'Error desconocido al eliminar el blog' };
  }
};