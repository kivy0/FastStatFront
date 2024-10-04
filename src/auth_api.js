import axios from 'axios';
import { AUTH_URL } from './config';

const api = axios.create({
  baseURL: AUTH_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Метод для авторизации пользователя
export const authUser = async (dataUser) => {
  try {
    const response = await api.post('/login', dataUser);
    return response.data;
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error;
  }
};

// Метод для выхода пользователя
export const logoutUser = async () => {
  try {
    const response = await api.post('/logout');
    return response.data;
  } catch (error) {
    console.error('Error logging out user:', error);
    throw error;
  }
};

// Метод для получения текущего пользователя
export const getCurrentUser = async () => {
  try {
    const response = await api.get('/current_user');
    return response.data;
  } catch (error) {
    console.error('Error getting current user:', error);
    throw error;
  }
};