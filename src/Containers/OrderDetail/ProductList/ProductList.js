import React from 'react'
import { useSelector } from 'react-redux'
import Item from './Item/Item'

const ProductList = () => {
    const orderDetailState = useSelector(state => state.orderDetail)
    return (
        <div className="p-4 border rounded-lg">
            <h2 className="font-semibold pb-4">
                Product list
            </h2>
            <div className="divide-y">
                {
                    orderDetailState.data.order_item.map((item) => {
                        return <Item key={item.id} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default ProductList
