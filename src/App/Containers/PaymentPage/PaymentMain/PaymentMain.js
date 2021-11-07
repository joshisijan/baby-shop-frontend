import OrderSummary from './OrderSummary/OrderSummary'
import PaymentOptionPage from './PaymentOptionPage/PaymentOptionPage'

const PaymentMain = () => {
    return (
        <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 border">
                <PaymentOptionPage />
            </div>
            <div className="p-4 self-start bg-secondary bg-opacity-20 w-full border">
                <OrderSummary />
            </div>
        </div>
    )
}

export default PaymentMain
