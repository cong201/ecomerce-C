import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cart/cartSlice";
import authApi from "./feature/auth/authApi";
import authReducer from "./feature/auth/authSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
