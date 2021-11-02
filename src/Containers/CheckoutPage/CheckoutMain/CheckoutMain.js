import { useSelector } from 'react-redux'
import CheckoutItem from './CheckoutItem/CheckoutItem'
import CheckoutShippingInfo from './CheckoutShippingInfo/CheckoutShippingInfo'
import CheckoutSummary from './CheckoutSummary/CheckoutSummary'
import LoadingOverlay from '../../../Components/LoadingOverlay/LoadingOverlay'
import FadeTransition from '../../../Components/Transition/FadeTransition'

const CheckoutVerify = () => {
    const checkoutState = useSelector(state => state.checkout)
    return (
        <div className="mt-4 md:-mt-1 p-2 md:p-6 grid justify-items-center">
            <FadeTransition show={checkoutState.isUpdating}>
                <LoadingOverlay label="Updating address..." />
            </FadeTransition>
            <div className="w-full max-w-6xl">
                <h1 className="mb-4 text-xl font-bold">Checkout</h1>
                <h2 className="font-medium mb-4">Shipping info</h2>
                <div className="flex gap-4 flex-col md:flex-row">
                    <div className="flex-1">
                        <CheckoutShippingInfo
                            billingAddress={checkoutState.data.order.shipping_address}
                            shippingAddress={checkoutState.data.order.billing_address}
                        />
                    </div>
                    <div className="self-start w-full md:max-w-md border">
                        <div className="p-4 bg-secondary bg-opacity-20">
                            <CheckoutSummary
                                priceWithoutDiscount={checkoutState.data.order.total_price_without_discount}
                                totalDiscount={checkoutState.data.order.total_discount}
                            />
                        </div>
                        <div className="p-4 border divide-y">
                            <h2 className="font-semibold pb-4">
                                Product list
                            </h2>
                            {
                                checkoutState.data.order_item.map((item) => {
                                    return <CheckoutItem key={item.id} item={item} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutVerify
