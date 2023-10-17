import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../features/Cart/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
    },
});

export default store;