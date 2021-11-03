import { createSlice } from "@reduxjs/toolkit";
import { addCartItem, fetchCartList, removeCartitem, updateCartItem } from "./cartAction";

const initialState = {
    isAdding: false,
    isRemoving: false,
    isLoading: false,
    isUpdating: false,
    isLoaded: false,
    data: {
        cart_items: [],
    },
}

const cartSlice = createSlice({  
    name: 'cart',
    initialState,
    reducers: {
        resetCartState: (state) => initialState
    },  
    extraReducers: {
        [fetchCartList.pending]: (state) => {
            if(!state.isLoaded) {
                state.isLoading = true
            }
        },
        [fetchCartList.rejected]: (state) => {
            state.isLoading = false
        },
        [fetchCartList.fulfilled]:(state, {payload}) => {
            state.isLoading = false
            state.isLoaded = true
            if(payload) {
                state.data = payload
            } else {
                state.data = initialState.data
            }
        },
        // for remove
        [removeCartitem.pending]: (state) => {
            state.isRemoving = true
        },
        [removeCartitem.fulfilled]: (state) => {
            state.isRemoving = false
        },
        [removeCartitem.fulfilled]: (state) => {
            state.isRemoving = false
        },
        // for update
        [updateCartItem.pending]: (state) => {
            state.isUpdating = true
        },
        [updateCartItem.fulfilled]: (state) => {
            state.isUpdating = false
        },
        [updateCartItem.fulfilled]: (state) => {
            state.isUpdating = false
        },
        // for adding
        [addCartItem.pending]: (state) => {
            state.isAdding = true
        },
        [addCartItem.fulfilled]: (state) => {
            state.isAdding = false
        },
        [addCartItem.fulfilled]: (state) => {
            state.isAdding = false
        },
    }
});

export default cartSlice.reducer

export const { resetCartState } = cartSlice.actions