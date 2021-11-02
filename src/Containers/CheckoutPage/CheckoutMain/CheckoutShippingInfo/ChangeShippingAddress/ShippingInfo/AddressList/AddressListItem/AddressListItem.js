import {
    PhoneIcon,
    UserIcon,
    LocationMarkerIcon,
} from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { checkoutAddressPatch } from '../../../../../../../../features/checkout/checkoutAction'

const AddressListItem = ({ address }) => {
    const dispatch = useDispatch() 
    const checkoutState = useSelector(state => state.checkout)

    const handleAddressUpdate = () => {
        dispatch(checkoutAddressPatch({  
            orderId: checkoutState.data.order.id,
            formData: {
                shipping_address: address.id,
                billing_address: checkoutState.data.order.billing_address.id,
            },
        }))
    }

    return (
        <button onClick={handleAddressUpdate} className="p-4 border">
            <table>
                <tbody>
                    <tr>
                        <td className="pr-4">
                            <UserIcon className="w-3.5 h-3.5" />
                        </td>
                        <td className="text-left">
                            {address.first_name} {address.last_name}
                        </td>
                    </tr>
                    <tr>
                        <td className="pr-4">
                            <PhoneIcon className="w-3.5 h-3.5" />
                        </td>
                        <td className="text-left">
                            {address.phone_number}
                        </td>
                    </tr>
                    <tr>
                        <td className="pr-4">
                            <LocationMarkerIcon className="w-3.5 h-3.5" />
                        </td>
                        <td className="space-x-2 text-left">
                            <span>{address.region}</span> |
                            <span>{address.city}</span> |
                            <span>{address.province}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </button>
    )
}

export default AddressListItem
