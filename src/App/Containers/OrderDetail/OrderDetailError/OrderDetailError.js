import React from 'react'
import { useDispatch } from 'react-redux'
import PrimaryTextButton from '../../../Components/Button/PrimaryTextButton'
import { fetchOrderDetail } from '../../../features/orderDetail/orderDetailAction'

const OrderDetailError = ({id}) => {
    const dispatch = useDispatch()
    const refresh = () => {
        dispatch(fetchOrderDetail(id))
    }
    return (
        <div className="flex gap-2 flex-col items-center py-6 px-4">
            <div className="text-red-600">
                Error loading order detail. Try again later.
            </div>
            <PrimaryTextButton onClick={refresh}>
                Refresh
            </PrimaryTextButton>            
        </div>
    )
}

export default OrderDetailError
