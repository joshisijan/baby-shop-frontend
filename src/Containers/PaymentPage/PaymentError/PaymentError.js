import React from 'react'
import { useHistory } from 'react-router'
import PrimaryTextButton from '../../../Components/Button/PrimaryTextButton'

const PaymentError = () => {
    const history = useHistory()
    const refresh = () => {
        history.push('/cart/checkout')
    }
    return (
        <div className="flex gap-2 flex-col items-center py-6 px-4">
            <div className="text-red-600">
                Error loading checkout page. Try again later.
            </div>
            <PrimaryTextButton onClick={refresh}>
                Goto checkout page
            </PrimaryTextButton>            
        </div>
    )
}

export default PaymentError
