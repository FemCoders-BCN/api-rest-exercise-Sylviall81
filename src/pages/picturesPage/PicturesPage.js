import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import picturesData from '../../assets/data/picturesDB.json'
import PictureObject from '../../components/pictureObject/PictureObject'

function PicturesPage() {

  let photoData = picturesData.pictures
  console.log(photoData);

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

        <div className="container-view-curses">
            {photoData && photoData.map((photo,id) => {
                return (
                    
                    <PictureObject key={photo.id}
                        id={photo.id}
                        download_url={photo.download_url}
                        author ={photo.autor}
                         />
                   
                    
                )
            })}
            </div>


    </main>
  )
}

export default PicturesPage