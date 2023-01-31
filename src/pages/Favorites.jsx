import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesThunk } from "../store/slices/favorites.slice";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoritesThunk());
  }, []);

  console.log(favorites);

  return (
    <div>
      <h1>Favorites</h1>
    </div>
  );
};

export default Favorites;
