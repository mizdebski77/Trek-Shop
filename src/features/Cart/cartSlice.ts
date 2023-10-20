import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../core/interface";
import { toast } from "react-toastify";

interface CartState {
    cartItems: CartItem[];
    cartTotalAmount: number;
    cartTotalQuantity: number;
}

const cartSlice = createSlice({
    name: "cartItems",
    initialState: {
        cartItems: [],
        cartTotalAmount: 0,
        cartTotalQuantity: 0,
    } as CartState,

    reducers: {
        addToCart: (state, action) => {
            const existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            state.cartTotalAmount += action.payload.price;

            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
                };
                toast.info("Increased product quantity", {
                    position: "bottom-left",
                });
            } else {
                state.cartItems.push({ ...action.payload, cartQuantity: 1 });
            }
        },

        removeItem: (state, action) => {
            const idToRemove = action.payload;
            const itemsToRemove = state.cartItems.filter((item) => item.id === idToRemove);

            if (itemsToRemove.length > 0) {
                itemsToRemove.forEach((item) => {
                    const index = state.cartItems.findIndex((cartItem) => cartItem.id === item.id);
                    if (index !== -1) {
                        const removedItem = state.cartItems[index];
                        state.cartItems.splice(index, 1);
                        state.cartTotalAmount -= removedItem.price * removedItem.cartQuantity;
                    }
                });
            }
        },

        decraseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            );

            if (itemIndex !== -1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                state.cartTotalAmount -= action.payload.price;
                toast.info("Decrased product quantity", {
                    position: "bottom-left",
                });
            } else {
            }
        }
    },
});

export const selectItemsState = (state: CartState) => state;
export const selectItems = (state: CartState) => state.cartItems;

export const { addToCart, removeItem, decraseCart } = cartSlice.actions;

export default cartSlice.reducer;
