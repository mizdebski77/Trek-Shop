import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInterface } from "../../core/interface";

interface CompareState {
    items: ProductInterface[];
}

const compareSlice = createSlice({
    name: "compare",
    initialState: { items: [] } as CompareState,
    reducers: {
        toggleCompare: (state, action: PayloadAction<ProductInterface>) => {
            const idx = state.items.findIndex(i => i.id === action.payload.id);
            if (idx >= 0) {
                state.items.splice(idx, 1);
            } else if (state.items.length < 3) {
                state.items.push(action.payload);
            }
        },
        clearCompare: (state) => {
            state.items = [];
        },
    },
});

export const { toggleCompare, clearCompare } = compareSlice.actions;
export default compareSlice.reducer;
