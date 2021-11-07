import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutLoading from './CheckoutLoading/CheckoutLoading'
import CheckoutMain from './CheckoutMain/CheckoutMain'
import CheckoutError from './CheckoutError/CheckoutError'
import { checkout } from '../../features/checkout/checkoutAction'
import { Helmet } from 'react-helmet'

const CheckoutPage = () => {
    const dispatch = useDispatch()
    const checkoutState = useSelector(state => state.checkout)

    useEffect(() => {
        dispatch(checkout());
    }, [dispatch])

    return (
        <div>
            <Helmet>
                <title>Checkout</title>
            </Helmet>
            {
                checkoutState.isLoading ?
                    <CheckoutLoading />
                    :
                    checkoutState.error ?
                        <CheckoutError />
                        :
                        <CheckoutMain />
            }
        </div>
    )
}

export default CheckoutPage
