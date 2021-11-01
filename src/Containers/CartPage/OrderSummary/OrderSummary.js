import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DarkTextButton from '../../../Components/Button/DarkTextButton'
import { showDialog } from '../../../features/alertDialog/alertDialogSlice'

const OrderSummary = () => {
    const cartState = useSelector(state => state.cart)
    const dispatch = useDispatch()
    let subtotal = 0
    const delivery = 60
    let tax = 0
    let total = 0
    // calculate subtotal
    cartState.data.cart_items.map((item) => {
        return subtotal += item.quantity * (item.product.price - item.product.price * item.product.discount_percentage / 100 )
        
    });

    tax = (subtotal + delivery) * 0.05
    total = subtotal + delivery + tax

    const handleCheckout = () => {
        dispatch(showDialog({   
            header: 'Checkout',
            description: 'Sint deserunt velit nisi aute ullamco magna nostrud excepteur. Incididunt commodo dolore in pariatur pariatur commodo magna qui in cillum tempor aute in nostrud. Proident ipsum aliquip id laboris fugiat incididunt. Cillum esse nulla fugiat sit id nostrud. Minim ea irure voluptate velit adipisicing esse. Pariatur nostrud cupidatat enim in sunt do veniam cupidatat nisi ex est pariatur. Tempor adipisicing velit ullamco commodo sit nulla ea duis deserunt in exercitation proident aute ea.',
            onYes: () => {
                alert('hello')
            }
        }));
    }

    return (
        <>
            <h2 className="font-semibold">
                Order Summary
            </h2>
            <div className="mt-6 divide-y">
                <div className="py-1 text-sm flex flex-wrap justify-between">
                    <span className="text-gray-600">
                        Subtotal
                    </span>
                    <span className="font-medium text-black">
                        Rs. {subtotal}
                    </span>
                </div>
                <div className="py-1 text-sm flex flex-wrap justify-between">
                    <span className="text-gray-600">
                        Delivery
                    </span>
                    <span className="font-medium text-black">
                        Rs. {delivery}
                    </span>
                </div>
                <div className="py-1 text-sm flex flex-wrap justify-between">
                    <span className="text-gray-600">
                        Tax
                    </span>
                    <span className="font-medium text-black">
                        Rs. {tax}
                    </span>
                </div>
                <div className="py-1 flex flex-wrap justify-between">
                    <span className="text-gray-600">
                        Total
                    </span>
                    <span className="font-medium text-black">
                        Rs. {total}
                    </span>
                </div>
                <div>
                    <DarkTextButton onClick={handleCheckout} className="w-full">Checkout</DarkTextButton>
                </div>
            </div>
        </>
    )
}

export default OrderSummary
