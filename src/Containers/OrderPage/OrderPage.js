import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrderList } from '../../features/order/orderAction'
import NoLoginOrder from './NoLoginOrder/NoLoginOrder'
import OrderError from './OrderError/OrderError'
import OrderLoading from './OrderLoading/OrderLoading'
import OrderMain from './OrderMain/OrderMain'

const OrderPage = () => {
    const dispatch = useDispatch()
    const userDetailState = useSelector(state => state.userDetail)
    const orderState = useSelector(state => state.order)

    useEffect(() => {
        if(userDetailState.accessToken !== null) {
            dispatch(fetchOrderList())
        }
    }, [dispatch, userDetailState.accessToken])

    return (
        <div className="mt-4 md:-mt-1 p-2 md:p-6 grid justify-items-center">
            <div className="w-full max-w-6xl">
                <h1 className="mb-4 text-xl font-bold">My orders</h1>
                {
                    userDetailState.accessToken === null ?
                        <NoLoginOrder />
                        :
                        orderState.isLoading ?
                            <OrderLoading />
                            :
                            orderState.error ? 
                                <OrderError />
                                :
                                orderState.data.length === 0 ?
                                <div className="pb-10 pt-6 flex justify-center font-medium">
                                    You have no orders
                                </div>
                                :
                                <OrderMain />
                }
            </div>
        </div>
    )
}

export default OrderPage
