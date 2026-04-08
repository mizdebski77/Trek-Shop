import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../features/Cart/cartSlice";
import wishlistReducer from "../features/Wishlist/wishlistSlice";
import compareReducer from "../features/Compare/compareSlice";

const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
        wishlist: wishlistReducer,
        compare: compareReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
