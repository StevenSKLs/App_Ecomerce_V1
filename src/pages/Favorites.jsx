import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesThunk } from "../store/slices/favorites.slice";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favorites = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoritesThunk());
  }, []);


  return (
    <div style={{marginTop:'4rem'}}>
      <h1>Favorites</h1>
      <ul>
        {favorites?.map((favorite) => (
          <li key={favorite.id}>
            <p>{favorite.title}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
