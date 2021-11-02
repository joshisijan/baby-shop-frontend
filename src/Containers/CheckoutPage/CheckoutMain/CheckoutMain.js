import { useSelector } from 'react-redux'
import CheckoutItem from './CheckoutItem/CheckoutItem'
import CheckoutSummary from './CheckoutSummary/CheckoutSummary'

const CheckoutVerify = () => {
    const checkoutState = useSelector(state => state.checkout)
    return (
        <div className="mt-4 md:-mt-1 p-2 md:p-6 grid justify-items-center">
            <div className="w-full max-w-6xl">
                <h1 className="mb-4 text-xl font-bold">Checkout</h1>
                <div className="flex flex-col md:flex-row">
                    <div className="order-1 md:order-2 self-start p-4 bg-secondary bg-opacity-20 w-full md:max-w-sm border">
                        <CheckoutSummary
                            priceWithoutDiscount={checkoutState.data.order.total_price_without_discount}
                            totalDiscount={checkoutState.data.order.total_discount}
                        />
                    </div>
                    <div className="order-2 md:order-1 flex-1 p-4 border divide-y">
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
    )
}

export default CheckoutVerify
