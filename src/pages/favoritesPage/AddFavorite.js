/*import React, { useState } from 'react';
import FavoriteService from '../../services/FavoriteService';

const AddFavorite = ({ onAdd }) => {
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');

  const handleAdd = async () => {
    const newFavorite = { author, image };
    const addedFavorite = await FavoriteService.addFavorite(newFavorite);
    onAdd(addedFavorite);
    setAuthor('');
    setImage('');
  };

  return (
    <div>
      <h2>Agregar Favorito</h2>
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de la Imagen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={handleAdd}>Agregar</button>
    </div>
  );
};

export default AddFavorite;*/
