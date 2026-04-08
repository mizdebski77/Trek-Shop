import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInterface } from "../../core/interface";

interface WishlistState {
    items: ProductInterface[];
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: { items: [] } as WishlistState,
    reducers: {
        toggleWishlist: (state, action: PayloadAction<ProductInterface>) => {
            const idx = state.items.findIndex(i => i.id === action.payload.id);
            if (idx >= 0) {
                state.items.splice(idx, 1);
            } else {
                state.items.push(action.payload);
            }
        },
    },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
