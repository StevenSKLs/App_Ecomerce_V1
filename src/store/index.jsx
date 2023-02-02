import { configureStore } from "@reduxjs/toolkit";
import isLoadingSlice from "./slices/isLoading.slice";
import productsSlice from "./slices/products.slice";
import favoritesSlice from "./slices/purchases.slice";
import cart_productSlice from "./slices/cart_product.slice";

export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    products: productsSlice,
    favorites: favoritesSlice,
    cart_product: cart_productSlice,
  }
});
