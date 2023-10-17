import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../core/interface";



interface CartState {
    cartItems: CartItem[];
    cartTotalAmount: number;
}

const cartSlice = createSlice({
    name: "cartItems",
    initialState: {
        cartItems: [],
        cartTotalAmount: 0,
    } as CartState,
    reducers: {
        addToCart(state: CartState, action: { payload: CartItem }) {
            state.cartItems.push(action.payload);
            state.cartTotalAmount += action.payload.price; 
        },
    },
});

export const selectItemsState = (state: CartState) => state;
export const selectItems = (state: CartState) => state.cartItems;

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
