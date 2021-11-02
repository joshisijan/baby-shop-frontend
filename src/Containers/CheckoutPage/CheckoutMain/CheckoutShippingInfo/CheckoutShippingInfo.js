import AddressDetail from './AddressDetail/AddressDetail'
import SecondaryTextButton from '../../../../Components/Button/SecondaryTextButton'
import ChangeShippingAddress from './ChangeShippingAddress/ChangeShippingAddress'
import { useDispatch, useSelector } from 'react-redux'
import { setIsSelectingShipping } from '../../../../features/checkout/checkoutSlice'

const CheckoutShippingInfo = ({ shippingAddress, billingAddress }) => {
    const dispatch = useDispatch()
    const checkoutState = useSelector(state => state.checkout)
    const handleChange = (value) => {
        dispatch(setIsSelectingShipping(value))
    }
    return (
        <div>
            {/* change shipping alert */}
            <ChangeShippingAddress  
                shown={checkoutState.isSelectingShipping}
                setShown={handleChange}
            /> 
            <div className="grid gap-4 md:grid-cols-2">
                <AddressDetail shipping={true} address={shippingAddress} />
                <AddressDetail billing={true}  address={billingAddress} />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
                <SecondaryTextButton onClick={() => handleChange(true)} className="text-sm">
                    Change shipping address
                </SecondaryTextButton>
                <SecondaryTextButton className="text-sm">
                    Change billing address
                </SecondaryTextButton>
            </div>
        </div>
    )
}

export default CheckoutShippingInfo
