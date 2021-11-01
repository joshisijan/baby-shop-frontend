import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DarkTextButton from '../../../Components/Button/DarkTextButton'
import { verifyCheckout } from '../../../features/checkout/checkoutAction'

const OrderSummary = () => {
    const dispatch = useDispatch()
    const cartState = useSelector(state => state.cart)
    const checkoutState = useSelector(state => state.checkout)
    let subtotal = 0
    const delivery = 60
    let total = 0
    // calculate subtotal
    cartState.data.cart_items.map((item) => {
        return subtotal += item.quantity * (item.product.price - item.product.price * item.product.discount_percentage / 100 )
        
    });

    total = subtotal + delivery

    const handleCheckout = () => {
        dispatch(verifyCheckout());
    }

    return (
        <>
            <h2 className="font-semibold">
                Order Summary
            </h2>
            <div className="mt-6 divide-y">
                <div className="py-1 text-sm flex flex-wrap justify-between">
                    <span className="text-gray-600">
                        Subtotal
                    </span>
                    <span className="font-medium text-black">
                        Rs. {subtotal}
                    </span>
                </div>
                <div className="py-1 text-sm flex flex-wrap justify-between">
                    <span className="text-gray-600">
                        Delivery
                    </span>
                    <span className="font-medium text-black">
                        Rs. {delivery}
                    </span>
                </div>
                <div className="py-1 flex flex-wrap justify-between">
                    <span className="text-gray-600">
                        Total
                    </span>
                    <span className="font-medium text-black">
                        Rs. {total}
                    </span>
                </div>
                <div>
                    <DarkTextButton isLoading={checkoutState.isVerifying} loadingText="Verifying..." onClick={handleCheckout} className="w-full">Checkout</DarkTextButton>
                </div>
            </div>
        </>
    )
}

export default OrderSummary
