import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        totalPrice: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.totalPrice += action.payload.price; 
        }
    }
});

export const {
    addProduct
} = cartSlice.actions;


export const selectCart = (state) => state.cart; // Select the entire cart state
export default cartSlice.reducer;