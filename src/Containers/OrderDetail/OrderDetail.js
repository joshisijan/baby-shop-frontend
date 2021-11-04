import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrderDetail } from '../../features/orderDetail/orderDetailAction'
import OrderDetailMain from './OrderDetailMain/OrderDetailMain'
import OrderDetailLoading from './OrderDetailLoading/OrderDetailLoading'
import OrderDetailError from './OrderDetailError/OrderDetailError'

const OrderDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const orderDetailState = useSelector(state => state.orderDetail)

    useEffect(() => {
        dispatch(fetchOrderDetail(id))
    }, [dispatch, id])

    return (

        <div className="grid justify-items-center">
            <div className="max-w-6xl w-full">
                {
                    orderDetailState.isLoading || orderDetailState.data === null ?
                        <OrderDetailLoading />
                        :
                        orderDetailState.error ?
                            <OrderDetailError id={id} />
                            :
                            <OrderDetailMain />
                }
            </div>
        </div>
    )
}

export default OrderDetail
