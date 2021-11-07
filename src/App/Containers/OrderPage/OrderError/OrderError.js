import React from 'react'
import { useDispatch } from 'react-redux'
import PrimaryTextButton from '../../../Components/Button/PrimaryTextButton'
import { fetchOrderList } from '../../../features/order/orderAction'

const OrderError = () => {
    const dispatch = useDispatch()
    const refresh = () => {
        dispatch(fetchOrderList())
    }
    return (
        <div className="flex gap-2 flex-col items-center py-6 px-4">
            <div className="text-red-600">
                Error loading your orders. Try again later.
            </div>
            <PrimaryTextButton onClick={refresh}>
                Refresh
            </PrimaryTextButton>            
        </div>
    )
}

export default OrderError
