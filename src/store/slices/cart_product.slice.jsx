import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { setIsLoading } from "./isLoading.slice";

export const cart_productSlice = createSlice({
  name: "cart_product",
  initialState: [],
  reducers: {
    setcart_product: (state, action) => {
      const cart_product = action.payload;
      return cart_product;
    }
  }
});

export const getcart_productThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://e-commerce-api-v2.academlo.tech/api/v1/cart", getConfig())
    .then((res) => dispatch(setcart_product(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const { setcart_product } = cart_productSlice.actions;

export default cart_productSlice.reducer;
