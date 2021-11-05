import React from 'react'
import orderStatusType from '../../../../constants/orderStatusType'
import currencyFormatter from '../../../../services/currencyFormatter'

const OrderItem = ({ orderDetail, paymentDetail }) => {

    const statusColorExtractor = (value) => Object.values(orderStatusType).find(data => data.label === value).color

    return (
        <div className="p-4 border shadow rounded-3xl bg-secondary bg-opacity-20">
            <div className="pt-4 px-4 text-xs font-semibold flex gap-2 flex-wrap items-center">
                <div className={`w-4 h-4 rounded-full ${statusColorExtractor(orderDetail.status)}`}></div>
                <div className="text-gray-700">{orderDetail.status}</div>
            </div>
            <div className="grid md:grid-cols-2">
                <div className="p-4 grid grid-cols-2 text-xs">
                    <div className="text-gray-700">
                        <h1 className="font-semibold text-gray-900 mb-2">Shipping address</h1>
                        <div>
                            {orderDetail.shipping_address.region}
                        </div>
                        <div>
                            {orderDetail.shipping_address.city}
                        </div>
                        <div>
                            {orderDetail.shipping_address.province}
                        </div>
                    </div>
                    <div className="text-gray-700">
                        <h1 className="font-semibold text-gray-900 mb-2">Payment information</h1>
                        <div>
                            {paymentDetail.payment_method}
                        </div>
                        <div>
                            {paymentDetail.status}
                        </div>
                        <div>
                            {paymentDetail.phone}
                        </div>
                        <div>
                            {paymentDetail.email}
                        </div>
                    </div>
                </div>
                <div className="p-4 text-xs">
                    <div className="flex gap-2 flex-wrap justify-between items-center">
                        <span className="font-medium text-gray-700">
                            Subtotal
                        </span>
                        <span className="text-sm font-medium">
                            {currencyFormatter(orderDetail.total_price_without_discount)}
                        </span>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-between items-center">
                        <span className="font-medium text-gray-700">
                            Shipping
                        </span>
                        <span className="text-sm font-medium">
                            {currencyFormatter(orderDetail.shipping_fee)}
                        </span>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-between items-center">
                        <span className="font-medium text-gray-700">
                            Discount
                        </span>
                        <span className="text-sm font-medium">
                            {currencyFormatter(orderDetail.total_discount)}
                        </span>
                    </div>
                    <hr />
                    <div className="flex gap-2 flex-wrap justify-between items-center">
                        <span className="font-medium text-gray-700">
                            Total
                        </span>
                        <span className="text-sm font-bold">
                            {currencyFormatter(orderDetail.total_amount)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem
