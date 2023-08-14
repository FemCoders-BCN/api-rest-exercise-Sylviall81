import React, {useState, useEffect }from 'react'
import Navbar from '../../components/navbar/Navbar'
import { LoremPicsumService } from '../../services/LoremPicsumService'
import './GrayscalePage.css'

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
    
}, []);


  return (
    <main>
        <h2>Aquí estará la imagen aleatoria en escala de grises de la tercera llamada</h2>
        <Navbar/>
        
        <div className="gray-scale-image-container">

        {grayScaleImg && <img className= "gray-scale-image" src={grayScaleImg} alt="Grayscale" />}

          

</div>


    </main>
  )
}

export default GrayscalePage