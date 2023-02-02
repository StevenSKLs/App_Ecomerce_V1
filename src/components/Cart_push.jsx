import React, { useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {getcart_productThunk } from "../store/slices/cart_product.slice";

const FavoritesSidebar = ({ show, handleClose }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getcart_productThunk());
  }, []);

  return (
    <Offcanvas placement="end" show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default FavoritesSidebar;
