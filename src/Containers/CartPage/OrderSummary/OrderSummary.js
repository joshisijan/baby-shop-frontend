import React from 'react'
import { useSelector } from 'react-redux'
import DarkTextButton from '../../../Components/Button/DarkTextButton'
import currencyFormatter from '../../../services/currencyFormatter'
import { useHistory } from 'react-router-dom'
import toast from 'react-hot-toast'
const OrderSummary = () => {
    const history = useHistory()
    const cartState = useSelector(state => state.cart)
    let subtotal = 0
    let discount = 0
    let total = 0
    // calculate subtotal
    cartState.data.cart_items.map((item) => {
        return subtotal += item.quantity * item.product.price
    });

    // calculate discount 
    cartState.data.cart_items.map((item) => {
        return discount += item.quantity * (item.product.price * item.product.discount_percentage / 100)
    });

    total = subtotal - discount

    const handleCanCheckout = () => {
        const canCheckout = cartState.data.can_checkout.status;
        if(canCheckout) {
            history.push('/cart/checkout'); //goto checkout
        } else {
            window.scrollTo({top: 0, behavior: 'smooth'});
            toast.error('Some of the product in your cart is out of stock. Either update your cart or remove that item from cart.');
        }
    }

    return (
        <>
            <h2 className="font-semibold">
                Order Summary
            </h2>
            <p className="text-xs">
                Total price here doesnot include delivery charge.
            </p>
            <div className="mt-6 divide-y">
                <div className="py-1 text-sm flex flex-wrap justify-between">
                    <span className="text-gray-600">
                        Subtotal
                    </span>
                    <span className="font-medium text-black">
                        {currencyFormatter(subtotal)}
                    </span>
                </div>
                {
                    discount > 0 ?
                        <div className="py-1 text-sm flex flex-wrap justify-between">
                            <span className="text-gray-600">
                                Discount
                            </span>
                            <span className="font-medium text-red-600">
                                - {currencyFormatter(discount)}
                            </span>
                        </div>
                        : null
                }
                <div className="py-1 flex flex-wrap justify-between">
                    <span className="text-gray-600">
                        Total
                    </span>
                    <span className="font-medium text-black">
                        {currencyFormatter(total)}
                    </span>
                </div>
                <div>
                    <DarkTextButton onClick={handleCanCheckout} className="w-full">Checkout</DarkTextButton>
                </div>
            </div>
        </>
    )
}

export default OrderSummary
