import React, { useState } from 'react'
import DarkTextButton from '../../../Components/Button/DarkTextButton'
import { CheckIcon } from '@heroicons/react/solid'

const PaymentOptionPage = () => {
    const [selectedPaymentOption, setSelectedPaymentOption] = useState(null)
    const [error, setError] = useState(null)
    const paymentOption = {
        esewa: "esewa",
        khalti: "khalti",
        cod: "cod",
    }
    const handlePayementSelection = (option) => {
        if(error !== null) setError(null)
        setSelectedPaymentOption(option);
    }

    const handlePayment = () => {
        if(selectedPaymentOption === null) {
            return setError('Select one of the payement option to continue');
        } else {
            alert('Feature comming soon')
        }
    }
    
    return (
        <>
            <div className="flex gap-4 flex-col">
                <button onClick={() => handlePayementSelection(paymentOption.esewa)} className="p-4 border border-gray-500 flex items-center gap-4">
                    <div>
                        <input readOnly={true} type="radio" checked={selectedPaymentOption === paymentOption.esewa ? true : false} />
                    </div>
                    <div className="flex-1 flex flex-col items-start">
                        <h1 className="font-bold">E-Sewa</h1>
                        <p className="text-sm">
                            Continue to pay with e-Sewa.
                        </p>
                    </div>
                </button>
                <button onClick={() => handlePayementSelection(paymentOption.khalti)} className="p-4 border border-gray-500 flex items-center gap-4">
                    <div>
                        <input readOnly={true} type="radio" checked={selectedPaymentOption === paymentOption.khalti ? true : false} />
                    </div>
                    <div className="flex-1 flex flex-col items-start">
                        <h1 className="font-bold">Khalti</h1>
                        <p className="text-sm">
                            Continue to pay with Khalti.
                        </p>
                    </div>
                </button>
                <button onClick={() => handlePayementSelection(paymentOption.cod)} className="p-4 border border-gray-500 flex items-center gap-4">
                    <div>
                        <input readOnly={true} type="radio" checked={selectedPaymentOption === paymentOption.cod ? true : false} />
                    </div>
                    <div className="flex-1 flex flex-col items-start">
                        <h1 className="font-bold">Cash on delivery</h1>
                        <p className="text-sm">
                            Continue to pay on delivery.
                        </p>
                    </div>
                </button>
                {
                    error !== null ? 
                    <div className="p-4 text-red-600 font-medium border border-red-600"> 
                        {error}
                    </div>
                    : null
                }
                <DarkTextButton onClick={handlePayment} className="w-full flex gap-2 justify-center items-center">
                    <CheckIcon className="w-5 h-5" />
                    <div className="py-1">
                        Continue with payment
                    </div>
                </DarkTextButton>
            </div>
        </>
    )
}

export default PaymentOptionPage
