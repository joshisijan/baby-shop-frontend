import React from 'react'
import { useDispatch } from 'react-redux'
import PrimaryTextButton from '../../../Components/Button/PrimaryTextButton'
import { checkout } from '../../../features/checkout/checkoutAction'

const CheckoutError = () => {
    const dispatch = useDispatch()
    const refresh = () => {
        dispatch(checkout())
    }
    return (
        <div className="flex gap-2 flex-col items-center py-6 px-4">
            <div className="text-red-600">
                Error loading checkout page. Try again later.
            </div>
            <PrimaryTextButton onClick={refresh}>
                Refresh
            </PrimaryTextButton>            
        </div>
    )
}

export default CheckoutError
