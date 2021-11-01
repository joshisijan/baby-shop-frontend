import { createSlice } from "@reduxjs/toolkit";
import { verifyCheckout } from "./checkoutAction";

const initialState = {
    isVerifying: false,
    data: {},
}

const checkoutSlice = createSlice({  
    name: 'checkout',
    initialState,
    reducers: {
    },    
    extraReducers: {
        [verifyCheckout.pending]: (state) => {
            state.isVerifying = true
        },
        [verifyCheckout.rejected]: (state) => {
            state.isVerifying = false
        },
        [verifyCheckout.fulfilled]: (state, {payload}) => {
            state.isVerifying = false
            state.data = payload
        },
    },
});

export default checkoutSlice.reducer