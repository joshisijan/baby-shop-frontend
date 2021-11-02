import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import OrderSummary from './OrderSummary/OrderSummary'
import PaymentOptionPage from './PaymentOptionPage/PaymentOptionPage'

const PaymentPage = () => {
    const checkoutState = useSelector(state => state.checkout)
    if(!checkoutState.isInitialized) {
        return <Redirect to="/cart/checkout" />
    }
    return (
        <div className="mt-4 md:-mt-1 p-2 md:p-6 grid justify-items-center">
            <div className="w-full max-w-6xl">
                <h1 className="mb-4 text-xl font-bold">Payment</h1>                
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="p-4 border">
                        <PaymentOptionPage />
                    </div>
                    <div className="p-4 self-start bg-secondary bg-opacity-20 w-full border">
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage
