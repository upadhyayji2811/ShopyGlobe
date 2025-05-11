import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cart: []
    },
    reducers: {
        AddItem: (state, action) => {
            state.cart.push(action.payload);
        },
        RemoveItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.cart.length = 0; // Properly clears the array without creating a new reference
        }
    }
});

export const { AddItem, RemoveItem,clearCart } = cartSlice.actions;
export default cartSlice.reducer;