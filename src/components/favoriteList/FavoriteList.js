import React, { useEffect, useState } from 'react';
import FavoriteService from '../../services/FavoriteService';

const FavoriteList = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const favoritesData = await FavoriteService.getAllFavorites();
    setFavorites(favoritesData);
  };

  return (
    <div>
      <h2>Favoritos</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <p>Autor: {favorite.author}</p>
            <img src={favorite.image} alt={favorite.author} />
            {/* Agrega botones para editar y eliminar */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteList;
