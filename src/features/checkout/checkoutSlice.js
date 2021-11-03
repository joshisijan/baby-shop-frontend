import { createSlice } from "@reduxjs/toolkit";
import { checkout, checkoutAddressPatch, checkoutAddressPatchForPayment, checkoutAddShippingAddress } from "./checkoutAction";

const initialState = {
    isLoading: false,
    isUpdating: false,
    isInitialized: false,
    isSelectingShipping: false,
    isSelectingBilling: false,
    error: false,
    data: {
        order: {
            id: 1,
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
        setIsSelectingShipping: (state, {payload}) => {
            state.isSelectingShipping = payload
        },
        setIsSelectingBilling: (state, {payload}) => {
            state.isSelectingBilling = payload
        },
    },    
    extraReducers: {
        // to init
        [checkout.pending]: (state) => {
            state.isLoading = true
        },
        [checkout.rejected]: (state) => {
            state.error = true
            state.isLoading = false
        },
        [checkout.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.isInitialized = true
            state.data = payload
        },
        // to patch
        [checkoutAddressPatch.pending]: (state) => {
            state.isSelectingShipping = false 
            state.isSelectingBilling = false
            state.isUpdating = true
        },
        [checkoutAddressPatch.rejected]: (state) => {
            state.isUpdating = false
        },
        [checkoutAddressPatch.fulfilled]: (state, {payload}) => {
            state.isUpdating = false
            state.data = payload
        },
        // to add
        [checkoutAddShippingAddress.pending]: (state) => {
            state.isSelectingShipping = false 
            state.isSelectingBilling = false
            state.isUpdating = true
        },
        [checkoutAddShippingAddress.rejected]: (state) => {
            state.isUpdating = false
        },
        [checkoutAddShippingAddress.fulfilled]: (state, {payload}) => {
            state.isUpdating = false
        },
        // to patch for payment
        [checkoutAddressPatchForPayment.pending]: (state) => {
            state.isUpdating = true
        },
        [checkoutAddressPatchForPayment.rejected]: (state) => {
            state.isUpdating = false
        },
        [checkoutAddressPatchForPayment.fulfilled]: (state, {payload}) => {
            state.isUpdating = false
            state.data = payload
        },
    },
});



export default checkoutSlice.reducer
export const { setIsSelectingShipping, setIsSelectingBilling } = checkoutSlice.actions