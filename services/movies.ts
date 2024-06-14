// src/services/apiService.ts
import axios from 'axios';
import { Movie } from '../types';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=b8559cc2'; 

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<Movie[]>(`${API_URL}?search=${query}`);
  return response.data;
};
