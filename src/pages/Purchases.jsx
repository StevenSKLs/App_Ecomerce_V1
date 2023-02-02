import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesThunk } from "../store/slices/purchases.slice";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoritesThunk());
  }, []);

  console.log(favorites)

  return (
    <div style={{marginTop:'4rem'}}>
      <h1>Favorites</h1>
      <ul>
        {favorites?.map((favorite) => (
          <li key={favorite.id}>
            <p>{favorite.product.title}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
