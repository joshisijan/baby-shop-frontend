import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem/OrderItem'

const OrderMain = () => {
    const orderState = useSelector(state => state.order)
    return (
        <div className="space-y-4">
            {
                orderState.data.map((order) => {
                    const orderDetail = order.order
                    return (
                        <OrderItem
                            key={orderDetail.id}
                            orderDetail={orderDetail}
                        />
                    )
                })
            }
        </div>
    )
}

export default OrderMain
