import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  filterproductsCategoryThunk,
  getproductsThunk
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

  return (
    <div>
      <h1>Home</h1>
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
