import React, {useState, useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import PictureObject from '../../components/pictureObject/PictureObject'
import { LoremPicsumService } from '../../services/LoremPicsumService'
import './PicturesPage.css'




function PicturesPage() {
    
    const [photoDB, setPhotoDB] = useState([]);// los 30 objetos   
    const picsumService = LoremPicsumService();
    

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

         </div>


    </main>
  )
}

export default PicturesPage 
