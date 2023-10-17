import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../features/Cart/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>

export default store;