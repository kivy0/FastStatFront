import axios from 'axios';
import { STAT_URL } from './config';

const api = axios.create({
  baseURL: STAT_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const get_years = async () => {
  try {
    const response = await api.post('/selectors/get_years/', );
    return response.data;
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error; 
  }
};

export const get_educational_organizations = async (data) => {
  try {
    const response = await api.post('/selectors/get_educational_organizations/', data);
    return response.data;
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error;
  }
};

export const get_grades = async (data) => {
  try {
    const response = await api.post('/selectors/get_grades/', data);
    return response.data;
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error;
  }
};

export const get_subjects = async (data) => {
  try {
    const response = await api.post('/selectors/get_subjects/', data);
    return response.data;
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error;
  }
};