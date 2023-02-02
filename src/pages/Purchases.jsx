import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesThunk } from "../store/slices/purchases.slice";
import { Link } from "react-router-dom";

const Purchases = () => {
  const purchases = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoritesThunk());
  }, []);

  return (
    <div style={{marginTop:'5rem'}}>
      <h1><b>Welcom you purchases</b></h1>
      <ul>
        {purchases?.map((favorite) => (
          <li key={favorite.id}>
            <p>{favorite.product?.title}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Purchases;
