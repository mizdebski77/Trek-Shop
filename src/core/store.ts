import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/Cart/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
});

export default store;