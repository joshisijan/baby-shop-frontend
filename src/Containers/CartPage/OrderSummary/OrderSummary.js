import React from 'react'
import DarkTextButton from '../../../Components/Button/DarkTextButton'

const OrderSummary = () => {
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
                        Rs.10000
                    </span>
                </div>
                <div className="py-1 text-sm flex flex-wrap justify-between">
                    <span className="text-gray-600">
                        Delivery
                    </span>
                    <span className="font-medium text-black">
                        Rs.60
                    </span>
                </div>
                <div className="py-1 text-sm flex flex-wrap justify-between">
                    <span className="text-gray-600">
                        Tax
                    </span>
                    <span className="font-medium text-black">
                        Rs.182
                    </span>
                </div>
                <div className="py-1 flex flex-wrap justify-between">
                    <span className="text-gray-600">
                        Total
                    </span>
                    <span className="font-medium text-black">
                        Rs.18200
                    </span>
                </div>
                <div>
                    <DarkTextButton className="w-full">Checkout</DarkTextButton>
                </div>
            </div>
        </>
    )
}

export default OrderSummary
