import DarkTextButton from "../../../../Components/Button/DarkTextButton"
import currencyFormatter from "../../../../services/currencyFormatter"

const CheckoutSummary = ({priceWithoutDiscount, totalDiscount}) => {
    const discount = totalDiscount
    const subtotal = priceWithoutDiscount
    const total = priceWithoutDiscount - totalDiscount

    const handleConfirmOrder = () => {

    }

    return (
        <>
            <h2 className="font-semibold">
                Order Summary                
            </h2>
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
                    <DarkTextButton onClick={handleConfirmOrder} className="w-full">Confirm order</DarkTextButton>
                </div>
            </div>
        </>
    )
}

export default CheckoutSummary
