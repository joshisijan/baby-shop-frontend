import { createSlice } from "@reduxjs/toolkit";
import { checkout } from "./checkoutAction";

const initialState = {
    isLoading: false,
    error: false,
    data: {
        order: {
            total_price_without_discount: 0,
            total_discount: 0,
        },
        order_item: [],
    },
}

const checkoutSlice = createSlice({  
    name: 'checkout',
    initialState,
    reducers: {
    },    
    extraReducers: {
        [checkout.pending]: (state) => {
            state.isLoading = true
        },
        [checkout.rejected]: (state) => {
            state.error = true
            state.isLoading = false
        },
        [checkout.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.data = payload
        },
    },
});

export default checkoutSlice.reducer