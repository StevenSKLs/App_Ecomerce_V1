import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { setIsLoading } from "./isLoading.slice";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    setFavorites: (state, action) => {
      const favorites = action.payload;
      return favorites;
    }
  }
});


export const getFavoritesThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://e-commerce-api-v2.academlo.tech/api/v1/purchases", getConfig())
    .then((res) => dispatch(setFavorites(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const purchaseCartThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(
      "https://e-commerce-api-v2.academlo.tech/api/v1/purchases",
      {},
      getConfig()
    )
    .then((res) => dispatch(getFavoritesThunk())) // dispatch(setCart([]))
    .finally(() => dispatch(setIsLoading(false)));
};


export const { setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
