import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, InputGroup, Form, Card  } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  filterproductsCategoryThunk,
  getproductsThunk,
  titleThunk
} from "../store/slices/products.slice";

const Home = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getproductsThunk());

    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories/")
      .then((res) => setCategories(res.data));
  }, []);

  const [changeInput, setChangeInput] = useState('')

  

  return (
    <div>
      <h1>Home</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={changeInput}

          onChange={(e) => setChangeInput(e.target.value)}
        />
        <Button 
        variant="outline-secondary" id="button-addon2"
        onClick={()=> dispatch(titleThunk(changeInput))}
        >
          Buscar
        </Button>
      </InputGroup>




      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={() => dispatch(filterproductsCategoryThunk(category.id))}
        >
          {category.name}
        </Button>
      ))}
      <div className="Card_Home">
         {productsList.map((product) => (
          <Card style={{ width: '18rem' }}
          key={product.id}>
          <Card.Img variant="top" src={product.images[0].url} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" 
            onClick={() => navigate(`/products/${product.id}`)}>Go somewhere</Button>
          </Card.Body>
        </Card>
        ))}
   
      </div>
       
    </div>
  );
};

export default Home;
