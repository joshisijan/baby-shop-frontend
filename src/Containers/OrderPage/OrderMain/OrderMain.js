import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PrimaryTextButton from '../../../Components/Button/PrimaryTextButton'
import EndOfTag from '../../../Components/EndOfTag/EndOfTag'
import { getNextData } from '../../../features/order/orderAction'
import FilterMenu from './FilterMenu/FilterMenu'
import OrderItem from './OrderItem/OrderItem'

const OrderMain = () => {
    const dispatch = useDispatch()
    const orderState = useSelector(state => state.order)
    const data = orderState.data.results

    const handleNext = () => {
        dispatch(getNextData(orderState.data.next));
    }

    return (
        <div>
            <FilterMenu />
            {
                data.length === 0 ?
                    <div className="p-4 my-10 rounded-lg border border-red-600 bg-red-50 font-medium text-red-600">
                        No order found
                    </div>
                    :
                    <div>
                        <div className="mt-4 grid gap-4 lg:grid-cols-2">
                            {
                                data.map((order) => {
                                    const orderDetail = order.order
                                    const paymentDetail = order.payment
                                    return (
                                        <div key={orderDetail.id}>
                                            <Link
                                                to={`/order/${orderDetail.id}/`}
                                            >
                                                <OrderItem
                                                    orderDetail={orderDetail}
                                                    paymentDetail={paymentDetail}
                                                />
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {
                            orderState.data.next !== null ?
                                <div className="flex justify-center pt-8 pb-6">
                                    <PrimaryTextButton isLoading={orderState.isLoadingNext} onClick={handleNext}>
                                        Load More
                                    </PrimaryTextButton>
                                </div>
                                :
                                <EndOfTag />
                        }
                    </div>
            }
        </div>
    )
}
export default OrderMain
