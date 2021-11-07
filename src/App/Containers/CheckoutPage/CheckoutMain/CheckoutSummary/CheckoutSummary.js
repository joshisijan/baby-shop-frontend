import { CreditCardIcon } from "@heroicons/react/outline"
import toast from "react-hot-toast"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import DarkTextButton from "../../../../Components/Button/DarkTextButton"
import currencyFormatter from "../../../../services/currencyFormatter"

const CheckoutSummary = ({ priceWithoutDiscount, totalDiscount }) => {
    const history = useHistory()
    const checkoutState = useSelector(state => state.checkout)
    const discount = totalDiscount
    const subtotal = priceWithoutDiscount
    const total = priceWithoutDiscount - totalDiscount

    const continueToPayment = () => {
        if (checkoutState.data.order.shipping_address === null || checkoutState.data.order.billing_address === null) {
            toast.error('Add required address field first to continue to payment.');
            window.scrollTo({top: 0, behavior: "smooth"});
        } else {
            history.push('/cart/payment')
        }
    }

    return (
        <>
            <h2 className="font-semibold">
                Order Summary
            </h2>
            <p className="text-xs">
                Total price here doesnot include delivery charge.
            </p>
            <div className="mt-2 divide-y">
                <div className="py-1 text-sm flex flex-wrap justify-between">
                    <span className="text-gray-600">
                        Subtotal
                    </span>
                    <span className="font-medium text-black">
                        {currencyFormatter(subtotal)}
                    </span>
                </div>
                {
                    discount > 0 ?
                        <div className="py-1 text-sm flex flex-wrap justify-between">
                            <span className="text-gray-600">
                                Discount
                            </span>
                            <span className="font-medium text-red-600">
                                - {currencyFormatter(discount)}
                            </span>
                        </div>
                        : null
                }
                <div className="py-1 flex flex-wrap justify-between">
                    <span className="text-gray-600">
                        Total
                    </span>
                    <span className="font-medium text-black">
                        {currencyFormatter(total)}
                    </span>
                </div>
                <div>
                    <DarkTextButton onClick={continueToPayment} className="w-full flex gap-2 justify-center items-center">
                        <CreditCardIcon className="w-5 h-5" />
                        <div className="py-1">
                            Continue to payment
                        </div>
                    </DarkTextButton>
                </div>
            </div>
        </>
    )
}

export default CheckoutSummary
