import React from 'react'
import CartItemList from './CartItemList/CartItemList'
import OrderSummary from './OrderSummary/OrderSummary'
import { useSelector } from 'react-redux'
import EmptyCart from './EmptyCart/EmptyCart'

const CartPage = () => {
    const cartState = useSelector(state => state.cart)
    return (
        <div className="mt-4 md:-mt-1 p-2 md:p-6 grid justify-items-center">
            <div className="w-full max-w-6xl">
                <h1 className="text-xl font-bold">Shopping Cart</h1>
                {
                    cartState.item.length === 0 ?
                        <EmptyCart />
                        :
                        <div className="mt-4 flex flex-col md:flex-row">
                            <div className="flex-1 p-4 border">
                                <CartItemList />
                            </div>
                            <div className="self-start p-4 bg-secondary bg-opacity-20 w-full md:max-w-sm border">
                                <OrderSummary />
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default CartPage
