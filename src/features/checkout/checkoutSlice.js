import { createSlice } from "@reduxjs/toolkit";
import { checkout, checkoutAddressPatch } from "./checkoutAction";

const initialState = {
    isLoading: false,
    isUpdating: false,
    error: false,
    data: {
        order: {
            total_price_without_discount: 0,
            total_discount: 0,
            billing_address: {
                id: 1,
                first_name: '',
                last_name: '',
                phone_number: '',
                province: '',
                city: '',
                region: '',
                is_default_billing: false,
                is_default_shipping: false,
                user: 1,
            },
            shipping_address: {
                id: 1,
                first_name: '',
                last_name: '',
                phone_number: '',
                province: '',
                city: '',
                region: '',
                is_default_billing: false,
                is_default_shipping: false,
                user: 1,
            },
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
        [checkoutAddressPatch.pending]: (state) => {
            state.isUpdating = true
        },
        [checkoutAddressPatch.rejected]: (state) => {
            state.isUpdating = false
        },
        [checkoutAddressPatch.fulfilled]: (state) => {
            state.isUpdating = false
        },
    },
});

export default checkoutSlice.reducer
