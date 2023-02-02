import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritesThunk } from "../store/slices/purchases.slice";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card , Row } from "react-bootstrap";

const Purchases = () => {
  const purchases = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoritesThunk());
  }, []);

  const navigate = useNavigate()

  console.log(purchases)
  return (
    <div style={{marginTop:'5rem'}}>
      <h1><b>Welcom you purchases</b></h1>
    <Row xs={1} md={2} lg={3} className="g-4"
           style={{ margin: '1rem', gap: '3rem', justifyContent: 'center' }}>
      {purchases.map((productsOne) => (
          <Card style={{ width: '18rem' }}
          key={productsOne.id}>
            <div className="images_img">
              <Card.Img variant="top" src={productsOne.product?.images?.[0].url} />
            </div>
          <Card.Body>
            <p>{productsOne.product?.brand}</p>
            <Card.Title>{productsOne.product?.title}</Card.Title>
            <hr />
            <p>Price</p>
            <Card.Text>
        {productsOne.product?.price} $
            </Card.Text>
            <Button variant="primary" 
            onClick={() => navigate(`/products/${productsOne.product?.id}`)}><i className="bi bi-cart3"></i></Button>
          </Card.Body>
        </Card>
        ))}
   </Row>
    </div>
  );
};

export default Purchases;
