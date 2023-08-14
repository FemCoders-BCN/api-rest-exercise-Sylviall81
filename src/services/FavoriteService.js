import axios from 'axios';

const API_ENDPOINT = 'http://localhost:5000'; // Cambia esta URL según el endpoint que proporcione json-server

const FavoriteService = {
  getAllFavorites: async () => {
    const response = await axios.get(`${API_ENDPOINT}/favorites`);
    return response.data;
  },

  addFavorite: async (newFavorite) => {
    const response = await axios.post(`${API_ENDPOINT}/favorites`, newFavorite);
    return response.data;
  },

  updateFavorite: async (id, updatedFavorite) => {
    const response = await axios.put(`${API_ENDPOINT}/favorites/${id}`, updatedFavorite);
    return response.data;
  },

  deleteFavorite: async (id) => {
    const response = await axios.delete(`${API_ENDPOINT}/favorites/${id}`);
    return response.data;
  }
};

export default FavoriteService;
