import React, {useState, useEffect} from 'react'
import { LoremPicsumService } from '../../services/LoremPicsumService'





const photoDB = () => {


    const [photoObject, setPhotoObject] = useState([]);






}

function respuestaOK (response) {
    // manejar respuesta exitosa
    console.log(response);
    photoDB.push(JSON.stringify(response.data));
    //setPhotoDB(JSON.stringify(response.data));
console.log("x:"+photoDB);
    return photoDB

}

picsumService.getAll()
        .then(respuestaOK)
        .catch(function (error) {

        console.log(error);
  })
        .finally(function () {
    // siempre sera executado
  });
    
  