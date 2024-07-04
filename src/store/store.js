import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import productsReducer from "./productsSlice";
import wishlistReducer from "./wishlistSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    products: productsReducer,
    wishlist: wishlistReducer,
  },
});
