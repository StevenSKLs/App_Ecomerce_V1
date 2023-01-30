import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { filterproductsCategoryThunk} from "../store/slices/products.slice";
import {Button, Card, Carousel} from 'react-bootstrap'

const Product_Id = () => {
  const { id } = useParams();
  const [products, setproducts] = useState({});

  const allproducts = useSelector((state) => state.products);

  const productsFiltered = allproducts.filter((products) => products.id !== Number(id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}/`).then((res) => {
      setproducts(res.data);
      dispatch(filterproductsCategoryThunk(res.data.category.id));
    });
  }, [id]);

  return (
    <div>
      <h1>{products.title}</h1>
      <p>{products.lead}</p>
      {productsFiltered.map((productsOne) => (
        <li key={productsOne.id} onClick={() => navigate(`/products/${productsOne.id}`)}>
          {productsOne.title}
        </li>
      ))}
      <p>{products.description}</p>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={products.images?.[0].url} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>




    <Carousel fade>
      {products.images?.map(product => (
          <Carousel.Item key={product.url}>
        <img className="d-block w-100" src={product.url}
          alt="First slide"
        />
      </Carousel.Item>
        
      ))}
    </Carousel>
    </div>
  );
};

export default Product_Id;
