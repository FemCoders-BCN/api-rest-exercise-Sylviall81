import axios from "axios";


//estas son algunas configuraciones que tiene axios, mientras seguimos con el curso encontrarás más
/*axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json'; */



export const FavoriteService = () => {
  
   const urlPicturesDB = 'http://localhost:5000/pictures';
  
  const getAllFavorites = () => {
    const response = axios.get(urlPicturesDB);
    return response;
  };

  /*const addNewFavorite = (newFavorite) => {
    const response = axios.post(`${urlPicturesDB}/${id}/${size}/${author}`); //¿como se pasan los datos?
    return response;
  };

  const updateFavorite = (id) => {
    const response = axios.put(`${urlPicturesDB}/${id}/${size}/${author}`); //¿como se pasan los datos?
    return response;
  };

  const deleteFavorite = (id) => {
    const response = axios.delete(`${urlPicturesDB}/${id}/`);
    return response;
  };

 */

  return {
    //Deberás retornar el método para que puedas exportarlo
    getAllFavorites
    /*
    updateFavorite,
    deleteFavorite*/
  }
}