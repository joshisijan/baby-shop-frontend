import { createSlice } from '@reduxjs/toolkit'
import { verifyPayment } from './verifyPaymentAction';

const initialState = {
    orderId: null,
    isVerifying: false,
    isPaid: false,
}

const verifyPaymentSlice = createSlice({
    name: 'verifyPayment',
    initialState: initialState,
    reducers: {
        setOrderId: (state, {payload}) => {
            state.orderId = payload
        },
        resetVerifyPayment: () => initialState
    },
    extraReducers: {
        [verifyPayment.pending]: (state) => {
            state.isVerifying = true
        },
        [verifyPayment.rejected]: (state) => {
            state.isVerifying = false
        },
        [verifyPayment.fulfilled]: (state) => {
            state.isVerifying = false
        },
    }
});


export default verifyPaymentSlice.reducer

