import React from 'react';
import "./PictureObject.css";


function PictureObject(props) {
  return (
    <>
            <div className="container-card">
                <div className="container-image">
                    <img className = "api-image" alt="fotografía recibida de la API" src={props.img}></img>
                    <div className="text-container">
                            <p className="text-id">Foto-ID:{props.id}</p>
                            <p className="text-author">Autor:{props.author}</p>
                    </div>
                </div>
                </div>
            </>
        

    )
}
      

export default PictureObject