import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getcart_productThunk } from "../store/slices/cart_product.slice";
import { Link } from "react-router-dom";

const Cart_product = () => {
  const favorites = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getcart_productThunk());
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

export default Cart_product;
