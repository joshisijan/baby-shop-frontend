import React from 'react'
import { useSelector } from 'react-redux'
import currencyFormatter from '../../../../services/currencyFormatter'
const OrderSummary = () => {
    const checkoutState = useSelector(state => state.checkout)

    let subtotal = checkoutState.data.order.total_price_without_discount
    let discount = checkoutState.data.order.total_discount
    const delivery = checkoutState.data.order.shipping_fee
    let total = subtotal - discount + delivery

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
                <div className="py-1 text-sm flex flex-wrap justify-between">
                    <span className="text-gray-600">
                        Delivery
                    </span>
                    <span className="font-medium text-black">
                        {currencyFormatter(delivery)}
                    </span>
                </div>
                <div className="py-1 flex flex-wrap justify-between">
                    <span className="text-gray-900 font-medium">
                        Total
                    </span>
                    <span className="font-medium text-black">
                        {currencyFormatter(total)}
                    </span>
                </div>
            </div>
        </>
    )
}

export default OrderSummary
