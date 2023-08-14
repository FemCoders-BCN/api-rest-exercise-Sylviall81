import React, {useState, useEffect }from 'react'
import Navbar from '../../components/navbar/Navbar'
import { LoremPicsumService } from '../../services/LoremPicsumService'
//import PictureObject from '../../components/pictureObject/PictureObject';


function GrayscalePage() {

  const [grayScaleImg, setGrayScaleImg] = useState('');

  const picsumService = LoremPicsumService();


  useEffect(() => {
    picsumService.getRandomGrayscale(600)
        .then (function (response){
          setGrayScaleImg(response.request.responseURL)
    
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
        <h2>Aquí estará la imagen aleatoria en escala de grises de la tercera llamada</h2>
        <Navbar/>
        <ul>
            <p>INSTRUCCIONES</p>
            <li>Crea los componentes que necesites para imprimir lo siguiente (siguiendo el ejemplo del componente PictureObject):</li>
            <ol>
                <li>La fotografía (queremos ver la imagen en nuestra app, no queremos la url).</li>
            </ol>
            <li>Has de borrar estas instrucciones cuando lo tengas.</li>
            <li>Los estilos los has de realizar tú misma.</li>
        </ul>

        <div className="grey-scale-image-container">

        {grayScaleImg && <img src={grayScaleImg} alt="Grayscale" />}

          

</div>






    </main>
  )
}

export default GrayscalePage