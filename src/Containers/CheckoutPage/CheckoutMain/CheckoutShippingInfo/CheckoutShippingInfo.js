import AddressDetail from './AddressDetail/AddressDetail'
import SecondaryTextButton from '../../../../Components/Button/SecondaryTextButton'
import ChangeShippingAddress from './ChangeShippingAddress/ChangeShippingAddress'
import { useState } from 'react'

const CheckoutShippingInfo = ({ shippingAddress, billingAddress }) => {
    const [ newShoppingShown, setNewShoppingShown ] = useState(false)
    return (
        <div>
            {/* change shipping alert */}
            <ChangeShippingAddress  
                shown={newShoppingShown}
                setShown={setNewShoppingShown}
            /> 
            <div className="grid gap-4 md:grid-cols-2">
                <AddressDetail shipping={true} address={shippingAddress} />
                <AddressDetail billing={true}  address={billingAddress} />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
                <SecondaryTextButton onClick={() => setNewShoppingShown(true)} className="text-sm">
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
