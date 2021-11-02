import AddressDetail from './AddressDetail/AddressDetail'
import SecondaryTextButton from '../../../../Components/Button/SecondaryTextButton'
import ChangeShippingAddress from './ChangeShippingAddress/ChangeShippingAddress'
import { useDispatch, useSelector } from 'react-redux'
import { setIsSelectingBilling, setIsSelectingShipping } from '../../../../features/checkout/checkoutSlice'
import ChangeBillingAddress from './ChangeBillingAddress/ChangeBillingAddress'

const CheckoutShippingInfo = ({ shippingAddress, billingAddress }) => {
    const dispatch = useDispatch()
    const checkoutState = useSelector(state => state.checkout)
    const handleShippingAddressChange = (value) => {
        dispatch(setIsSelectingShipping(value))
    }

    const handleBillingAddressChange = (value) => {
        dispatch(setIsSelectingBilling(value))
    }
    return (
        <div>
            {/* change shipping alert */}
            <ChangeShippingAddress  
                shown={checkoutState.isSelectingShipping}
                setShown={handleShippingAddressChange}
            /> 

            {/* change billing alert */}
            <ChangeBillingAddress  
                shown={checkoutState.isSelectingBilling}
                setShown={handleBillingAddressChange}
            /> 
            <div className="grid gap-4">
                <AddressDetail shipping={true} address={shippingAddress} />
                <AddressDetail billing={true}  address={billingAddress} />
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
                <SecondaryTextButton onClick={() => handleShippingAddressChange(true)}>
                    Change shipping address
                </SecondaryTextButton>
                <SecondaryTextButton onClick={() => handleBillingAddressChange(true)}>
                    Change billing address
                </SecondaryTextButton>
            </div>
        </div>
    )
}

export default CheckoutShippingInfo
