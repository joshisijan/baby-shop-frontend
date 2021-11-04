import React from 'react'
import { UserIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'

const ShippingInfo = () => {
    const orderDetailState = useSelector(state => state.orderDetail)
    return (
        <div className="p-4 border text-sm rounded-t-lg">
            <div className="flex gap-2 flex-wrap items-center">
                <UserIcon className="w-3.5 h-3.5" />
                <span className="font-medium">Receiver: </span>
                <span>{orderDetailState.data.order.shipping_address.first_name} {orderDetailState.data.order.shipping_address.last_name}</span>
            </div>
            <div className="flex gap-2 flex-wrap items-center">
                <PhoneIcon className="w-3.5 h-3.5" />
                {orderDetailState.data.order.shipping_address.phone_number}
            </div>
            <div className="text-gray-600 flex gap-2 flex-wrap items-center">
                <LocationMarkerIcon  className="w-3.5 h-3.5" />
                {orderDetailState.data.order.shipping_address.region} | {orderDetailState.data.order.shipping_address.city} | {orderDetailState.data.order.shipping_address.province}
            </div>
        </div>
    )
}

export default ShippingInfo
