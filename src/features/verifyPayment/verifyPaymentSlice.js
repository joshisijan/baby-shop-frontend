import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
import { verifyPayment } from './verifyPaymentAction';

const initialState = {
    isVerifying: false,
    error: false,
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
            state.error = true
            state.isVerifying = false
            toast.error('Payment unsuccessful. Try again later.')
        },
        [verifyPayment.fulfilled]: (state, {payload}) => {
            state.isVerifying = false            
            state.isPaid = payload.order.is_paid
            if(payload.order.is_paid) {
                toast.success('Payment successful. You check your order status.')
            } else {
                toast.error('Payment unsuccessful. Try again later.')
            }
        },
    }
});


export default verifyPaymentSlice.reducer

export const { resetVerifyPayment } = verifyPaymentSlice.actions

