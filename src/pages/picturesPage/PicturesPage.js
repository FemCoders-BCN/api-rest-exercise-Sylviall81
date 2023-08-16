import React, {useState, useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import PictureObject from '../../components/pictureObject/PictureObject'
import {LoremPicsumService } from '../../services/LoremPicsumService'
import {FavoriteService} from '../../services/FavoriteService';
import './PicturesPage.css'




function PicturesPage() {
    
    const [photoDB, setPhotoDB] = useState([]);// los 30 objetos   que vienen desde picsumService
    const picsumService = LoremPicsumService();
    
    const favService = FavoriteService();
    const [author, setAuthor] = useState('');
    const [photo, setPhoto] = useState(''); //El objeto individual 
    

    useEffect(() => {
        picsumService.getAll()
           /* .then(respuestaOK)*/
            .then (function (response){
                console.log(response);
                setPhotoDB(response.data);
            })
            .catch(function (error) {    
            console.log(error);
            })
            .finally(function () {

            });
        // El código aquí se ejecutará después de *cada* renderizado
    }, []);


    const AddFavorite = ({ onAdd }) => {
      
      const handleAdd = async () => {
        const newFavorite = { author, photo } ;
        const addedFavorite = favService.addNewFavorite(newFavorite);
        onAdd(addedFavorite);
        setAuthor('');
        setPhoto('');
      };


  return (
    <main>

        <h2>Aquí estarán todos los objetos de la primera llamada</h2>
        <Navbar/>
            
        <div className="container-photo-grid">

        
         {photoDB.map((photo) => (
            <PictureObject 
            key={photo.id} 
            id= {photo.id} 
            author = {photo.author} 
            download_url= {photo.download_url} />
       
         ))}
            
            <button onClick={handleAdd}>Agregar</button>
         
         </div>


    </main>
  )
}

export default PicturesPage
