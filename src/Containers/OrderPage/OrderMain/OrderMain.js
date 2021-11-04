import React from 'react'
import { useSelector } from 'react-redux'
import FilterMenu from './FilterMenu/FilterMenu'
import OrderItem from './OrderItem/OrderItem'

const OrderMain = () => {
    const orderState = useSelector(state => state.order)
    const data = orderState.data.results
    return (
        <div className="space-y-4">
            <FilterMenu />
            {   
                data.length === 0 ? 
                <div className="p-4 my-10 rounded-lg border border-red-600 bg-red-50 font-medium text-red-600">  
                    No order found
                </div>
                :
                data.map((order) => {
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
