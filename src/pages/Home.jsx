import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, InputGroup, Form  } from "react-bootstrap";
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
      <ul>
        {productsList.map((product) => (
          <li key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
            {product.title}
            <br />
            <img src={product.images[0].url} alt="" style={{ width: 300 }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
