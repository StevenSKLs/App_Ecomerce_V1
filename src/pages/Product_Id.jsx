import React from "react";
import { useParams } from "react-router-dom";

const Product_Id = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>News Detail</h1>
      <p>
        Mostrando producto de id: <b>{id}</b>
      </p>
    </div>
  );
};

export default Product_Id;
