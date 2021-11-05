import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
import { verifyPayment } from './verifyPaymentAction';

const initialState = {
    orderId: null,
    isVerifying: false,
    isPaid: null,
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
            state.isPaid = null
            state.isVerifying = true
        },
        [verifyPayment.rejected]: (state) => {
            state.isPaid = {}
            state.isVerifying = false
        },
        [verifyPayment.fulfilled]: (state, {payload}) => {
            state.isVerifying = false
            console.log(payload)
            toast.success('Payment successful. You check your order status.')
            state.isPaid = payload
        },
    }
});


export default verifyPaymentSlice.reducer

export const { resetVerifyPayment } = verifyPaymentSlice.actions

