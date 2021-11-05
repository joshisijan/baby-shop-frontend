import React, { useEffect } from 'react'
import CartItemList from './CartItemList/CartItemList'
import OrderSummary from './OrderSummary/OrderSummary'
import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from './EmptyCart/EmptyCart'
import NoLoginCart from './NoLoginCart/NoLoginCart'
import CartLoading from './CartLoading/CartLoading'
import { fetchCartList } from '../../features/cart/cartAction'

const CartPage = () => {
    const dispatch = useDispatch()
    const cartState = useSelector(state => state.cart)
    const userDetailState = useSelector(state => state.userDetail)

    useEffect(() => {
        if (userDetailState.accessToken !== null) {
            dispatch(fetchCartList())
        }
    }, [dispatch, userDetailState.accessToken]);

    return (
        <div className="mt-4 md:-mt-1 p-2 md:p-6 grid justify-items-center">
            <div className="w-full max-w-6xl">
                <h1 className="mb-4 text-xl font-bold">Shopping Cart</h1>
                {
                    userDetailState.accessToken === null ?
                        <NoLoginCart />
                        :
                        cartState.isLoading || cartState.data === null ?
                            <CartLoading />
                            :
                            cartState.data.cart_items.length === 0 ?
                                <EmptyCart />
                                :
                                <div className="flex flex-col lg:flex-row">
                                    <div className="flex-1 p-4 border rounded-t-lg md:rounded-bl-lg lg:rounded-l-lg lg:rounded-t-none lg:rounded-br-lg">
                                        <CartItemList />
                                    </div>
                                    <div className="self-start md:self-end lg:self-start p-4 bg-secondary bg-opacity-20 w-full md:max-w-sm border rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg">
                                        <OrderSummary />
                                    </div>
                                </div>
                }
            </div>
        </div>
    )
}

export default CartPage
