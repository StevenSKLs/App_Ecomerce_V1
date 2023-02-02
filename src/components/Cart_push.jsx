import React, { useEffect } from "react";
import { Card, Col, Offcanvas, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {getcart_productThunk } from "../store/slices/cart_product.slice";
import { purchaseCartThunk } from "../store/slices/purchases.slice";

const FavoritesSidebar = ({ show, handleClose }) => {
  const dispatch = useDispatch();

  const products_cart = useSelector((state) => state.cart_product);

  useEffect(() => {
    dispatch(getcart_productThunk());
  }, []);

  console.log(products_cart)

  return (
    <>
    <Offcanvas placement="end" show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {products_cart.map(product =>(  
            <div  key={product.id} className='card_push'>
              <Row>
                <Col>
                <img src={product.product?.images?.[0].url} alt="" className="img-fluid"/>
                </Col>
                <Col>
                <p>{product.product?.title}</p>
            <hr />
            <p>Price</p>
           <p>{product.product?.price} $</p> 
                </Col>
              </Row>
            </div>
        ))}
      </Offcanvas.Body>
      <button onClick={()=>{dispatch(purchaseCartThunk()) ,  dispatch(getcart_productThunk())}}>borrar o comprar</button>
    </Offcanvas>
    </>
  );
};

export default FavoritesSidebar;
