import { createSlice } from "@reduxjs/toolkit";
import { addCartItem, fetchCartList, removeCartitem, updateCartItem } from "./cartAction";

const initialState = {
    isAdding: false,
    isRemoving: false,
    isLoading: false,
    isUpdating: false,
    isLoaded: false,
    data: null,
}

const cartSlice = createSlice({  
    name: 'cart',
    initialState,
    reducers: {
        resetCartState: () => initialState,
        localRemoveFromCart: (state, {payload}) => {
            if(state.data !== null) {
                const tempCartItem = state.data.cart_items.filter(data => data.id !== payload)
                state.data.cart_items = tempCartItem
            }
        },
        localUpdateCart: (state, {payload}) => {
            if(state.data !== null) {
                const tempCartItem = state.data.cart_items
                tempCartItem.map((item) => {
                    if(item.id === payload.id) {
                        item.quantity = payload.quantity
                    }
                    return null
                })
                state.data.cart_items = tempCartItem
            }
        },
    },  
    extraReducers: {
        [fetchCartList.pending]: (state) => {
            if(!state.isLoaded) {
                state.isLoading = true
            }
        },
        [fetchCartList.rejected]: (state) => {
            state.data = {}
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

export const { 
    resetCartState, 
    localRemoveFromCart, 
    localUpdateCart 
} = cartSlice.actions