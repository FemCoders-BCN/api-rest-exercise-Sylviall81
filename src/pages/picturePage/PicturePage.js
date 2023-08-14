import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { LoremPicsumService } from "../../services/LoremPicsumService";
import "./PicturePage.css";

function PicturePage() {
  const picsumService = LoremPicsumService();
  const [id, setId] = useState("");
  const [imgById, setImgById] = useState("");
  const [titleText, setTitleText] = useState("");

  const imgSize = "350";

  useEffect(() => {
    if (!id) {
      return;
    }

    picsumService
      .getById(id, imgSize)
      .then(function (response) {
        console.log(response.data);
        setImgById(response.request.responseURL);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id, imgSize]);

  return (
    <main>
      <h2>Aquí estará la imagen de la segunda llamada</h2>
      <Navbar />
      <div>
        <p className="intro-text">
          Introduce un número para ver la foto con el ID correspondiente:  <input
          className="id-input"
          type="number"
          id="id-foto"
          placeholder="ID de la foto"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
            setTitleText(`Foto ID:${e.target.value}.`);
          }}
        />
        </p>
       
      </div>

      <h3 className="title-text">{titleText}</h3>

      <div className="image-by-id-container">
        {imgById && (
          <img
            className="image-by-id"
            src={imgById}
            alt={`Foto con ID ${id}`}
          />
        )}
      </div>
    </main>
  );
}

export default PicturePage;
