import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import langReducer from "../features/lang/langSLice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    lang: langReducer,
  },
});
