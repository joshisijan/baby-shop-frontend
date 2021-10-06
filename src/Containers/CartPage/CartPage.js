import React from 'react'
import CartItemList from './CartItemList/CartItemList'
import OrderSummary from './OrderSummary/OrderSummary'

const CartPage = () => {
    return (
        <div className="p-2 md:p-6 grid justify-items-center">
            <div className="w-full max-w-6xl">
                <h1 className="text-xl font-bold">Shopping Cart</h1>
                <div className="mt-4 flex flex-col md:flex-row">
                    <div className="flex-1 p-4 border">
                        <CartItemList />
                    </div>
                    <div className="self-start p-4 bg-secondary bg-opacity-20 w-full md:max-w-sm border">
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage
