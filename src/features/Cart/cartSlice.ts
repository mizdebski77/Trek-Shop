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
        addToCart: (state,  action) => {
            state.cartItems.push(action.payload);
            state.cartTotalAmount += action.payload.price;
        },

        removeItem: (state, action) => {
            const index = state.cartItems.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                const removedItem = state.cartItems[index];
                state.cartItems.splice(index, 1);
                state.cartTotalAmount -= removedItem.price;
            }
        },
    },
});

export const selectItemsState = (state: CartState) => state;
export const selectItems = (state: CartState) => state.cartItems;

export const { addToCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
