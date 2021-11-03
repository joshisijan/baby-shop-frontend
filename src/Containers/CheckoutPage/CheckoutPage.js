import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutLoading from './CheckoutLoading/CheckoutLoading'
import CheckoutMain from './CheckoutMain/CheckoutMain'
import CheckoutError from './CheckoutError/CheckoutError'
import { checkout } from '../../features/checkout/checkoutAction'

const CheckoutPage = () => {
    const dispatch = useDispatch()
    const checkoutState = useSelector(state => state.checkout)
    const checkoutInitialized = checkoutState.isInitialized

    useEffect(() => {
        if(!checkoutInitialized) {
            dispatch(checkout());
        }
    }, [dispatch, checkoutInitialized])

    return (
        <div>
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
