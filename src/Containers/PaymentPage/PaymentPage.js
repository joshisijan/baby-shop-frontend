import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { checkoutAddressPatchForPayment } from '../../features/checkout/checkoutAction'
import PaymentLoading from './PaymentLoading/PaymentLoading'
import PaymentMain from './PaymentMain/PaymentMain'
import PaymentError from './PaymentError/PaymentError'


const PaymentPage = () => {
    const dispatch = useDispatch()
    const checkoutState = useSelector(state => state.checkout)
    const checkoutInitialized = checkoutState.isInitialized
    const checkoutUpdating = checkoutState.isUpdating
    const shippingId = checkoutState.data.order.shipping_address.id
    const billingId = checkoutState.data.order.billing_address.id
    const orderId = checkoutState.data.order.id

    useEffect(() => {
        if (checkoutInitialized) {
        return dispatch(checkoutAddressPatchForPayment({
                orderId,
                formData: {
                    shipping_address: shippingId,
                    billing_address: billingId,
                }
            }))
        }
    }, [checkoutInitialized, orderId, shippingId, billingId, dispatch]);

    if (!checkoutInitialized) {
        return <Redirect to="/cart/checkout" />
    }

    return (
        <div className="mt-4 md:-mt-1 p-2 md:p-6 grid justify-items-center">
            <div className="w-full max-w-6xl">
                <h1 className="mb-4 text-xl font-bold">Payment</h1>
                {
                    checkoutUpdating ?
                        <PaymentLoading />
                        :
                        checkoutState.error ?
                            <PaymentError />
                            :
                            <PaymentMain />
                }
            </div>
        </div>
    )
}

export default PaymentPage
