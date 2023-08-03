import React from 'react';
import "./PictureObject.css";
//import LoremPicsumService from '../../services/LoremPicsumService'
//import {getAll} from '../../services/LoremPicsumService'

    
function PictureObject(props) {
  
  return (
  
              <div>      
                <div key={props.id} className="container-card">
                    <div className="container-image">
                    <img className = "api-image" src = {props.download_url} alt="fotografía recibida de la API"></img>  
                  </div>
                  
                  <div className="text-container">
                            <p className="text-id">Foto-ID:{props.id}</p>
                            <p className="text-author">Autor:{props.author}</p>
                  
                  </div>
                </div> 
          
              
      </div>
                     
            
    )
}
      

export default PictureObject