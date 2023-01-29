import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { filterproductsCategoryThunk} from "../store/slices/products.slice";

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
      <img src={products.images?.[0].url} alt="" />
    </div>
  );
};

export default Product_Id;
