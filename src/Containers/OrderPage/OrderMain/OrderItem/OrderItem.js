import React from 'react'
import currencyFormatter from '../../../../services/currencyFormatter'

const OrderItem = ({ orderDetail }) => {
    return (
        <div className="p-4 border rounded-3xl bg-secondary bg-opacity-5">
            <div className="pt-4 px-4 text-sm font-semibold">
                <span className="text-gray-900">Status:</span> <span className="text-gray-700">{orderDetail.status}</span>
            </div>
            <div className="grid md:grid-cols-2">
                <div className="p-4 grid grid-cols-2">
                    <div className="text-sm text-gray-700">
                        <h1 className="font-semibold text-gray-900 mb-2">Shipping address</h1>
                        <div>
                            Sirutar
                        </div>
                        <div>
                            Bhaktapur
                        </div>
                        <div>
                            Bagmati Province
                        </div>
                    </div>
                    <div className="text-sm text-gray-700">
                        <h1 className="font-semibold text-gray-900 mb-2">Payment information</h1>
                        <div>
                            e-Sewa
                        </div>
                        <div>
                            9841235565
                        </div>
                        <div>
                            joshisijan96@gmail.com
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex gap-2 flex-wrap justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                            Subtotal
                        </span>
                        <span className="font-medium">
                            {currencyFormatter(orderDetail.total_price_without_discount)}
                        </span>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                            Shipping
                        </span>
                        <span className="font-medium">
                            {currencyFormatter(orderDetail.shipping_fee)}
                        </span>
                    </div>
                    <div className="flex gap-2 flex-wrap justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                            Discount
                        </span>
                        <span className="font-medium">
                            {currencyFormatter(orderDetail.total_discount)}
                        </span>
                    </div>
                    <hr />
                    <div className="flex gap-2 flex-wrap justify-between items-center">
                        <span className="font-medium text-gray-700">
                            Total
                        </span>
                        <span className="text-lg font-bold">
                            {currencyFormatter(orderDetail.total_amount)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem
