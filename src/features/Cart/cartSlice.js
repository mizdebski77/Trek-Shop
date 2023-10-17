import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0
    },
    reducers: {
        addToCart({ cartItems }, { payload: cartItem }) {
            cartItems.push(cartItem);
        }
    },
});


export const { addToCart } = cartSlice.actions


export default cartSlice.reducer;