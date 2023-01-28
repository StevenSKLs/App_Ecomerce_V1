import { createSlice } from "@reduxjs/toolkit";
import { setIsLoading } from "./isLoading.slice";
import axios from "axios";

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setproducts: (state, action) => {
      const products = action.payload;
      return products;
    }
  }
});

export const getproductsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .get("https://e-commerce-api-v2.academlo.tech/api/v1/products/")
    .then((res) => dispatch(setproducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterproductsCategoryThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`)
    .then((res) => dispatch(setproducts(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setproducts } = productsSlice.actions;

export default productsSlice.reducer;
