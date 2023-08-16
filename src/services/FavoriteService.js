import axios from "axios";


//estas son algunas configuraciones que tiene axios, mientras seguimos con el curso encontrarás más
/*axios.defaults.baseURL = 'http://localhost:5000/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json'; */



export const FavoriteService = () => {
  

   const urlPicturesDB = 'http://localhost:5000/pictures';
  //Los endpoints que tienen llaves con un texto dentro, quiere decir que le has de pasar algún valor /id/{image}/{size}, eso significa que image y size son valores que te dirá la documentación cómo se pasan.
  /*const urlGetById = '/id/';
  //Construye la url para el tercer endpoint
  const urlGetGrayscale = '?grayscale';*/

  const getAllFavorites = () => {
    const response = axios.get(urlPicturesDB);//No estoy segura q esto sea asi xq 
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