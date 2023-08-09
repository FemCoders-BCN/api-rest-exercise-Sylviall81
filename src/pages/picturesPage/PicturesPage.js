import React, {useState, useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import PictureObject from '../../components/pictureObject/PictureObject'
import { LoremPicsumService } from '../../services/LoremPicsumService'
import './PicturesPage.css'




function PicturesPage() {
    
    const [photoDB, setPhotoDB] = useState([]);// los 30 objetos   
    const picsumService = LoremPicsumService();
    /*function respuestaOK (response) {
            console.log(response);
            setPhotoDB(response.data);
           arrayPhotoDB = JSON.parse(response.data);

            console.log(photoDB);
        return arrayPhotoDB;
    }*/

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
        <ul>
            <p>INSTRUCCIONES</p>
            <li>Crea los componentes que necesites para imprimir una lista o tarjetas que contengan lo siguiente (deberán estar todos los objetos de la llamada a la API):</li>
            <ol>
                <li>El id de la imagen.</li>
                <li>Su autor.</li>
                <li>La fotografía (queremos ver la imagen en nuestra app, no queremos la url).</li>
            </ol>
            <li>Has de borrar estas instrucciones cuando lo tengas.</li>
            <li>Los estilos los has de realizar tú misma.</li>
        </ul>

        <div className="container-photo-grid">

           {/*<p>{photoDB}</p>*/}

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


/*
 {photoDB.map((photo) => (
            <div key={photo.id}>
                <p>ID: {photo.id}</p>
             <p>Author: {photo.author}</p>
             <img src= {photo.download_url} />
       </div>
         ))}
         */