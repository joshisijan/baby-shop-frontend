import {
    PhoneIcon,
    UserIcon,
    LocationMarkerIcon,
} from '@heroicons/react/outline'

const AddressDetail = ({ address, shipping = false, billing = false }) => {
    return (
        <div className={`rounded-2xl py-4 border flex flex-col ${ address === null ? 'border-red-600' : '' }`}>
            <div className="px-4 py-2 font-medium flex flex-wrap">
                <div className={`py-1 px-2 rounded-2xl border ${address === null ? 'bg-red-50 border-red-600 text-red-600' : 'bg-secondary bg-opacity-50 border-secondary'}`}>
                    {
                        shipping ?
                            'Shipping address'
                            :
                            'Billing address'
                    }
                </div>
            </div>
            <div className="px-4 pb-4">
                {
                    address === null 
                    ?
                    <div className="text-sm font-medium text-red-600">
                        {
                            billing ?
                            'Billing address is not provided by user yet. Click "Change billing address" button to add billing.'
                            :
                            'Shipping address is not provided by user yet. Click "Change shipping address" button to add shipping address.'
                        }
                    </div> 
                    :
                    <table>
                        <tbody>
                            <tr>
                                <td className="pr-4">
                                    <UserIcon className="w-3.5 h-3.5" />
                                </td>
                                <td>
                                    {address.first_name} {address.last_name}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <PhoneIcon className="w-3.5 h-3.5" />
                                </td>
                                <td>
                                    {address.phone_number}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <LocationMarkerIcon className="w-3.5 h-3.5" />
                                </td>
                                <td className="space-x-2">
                                    <span>{address.region}</span> |
                                    <span>{address.city}</span> |
                                    <span>{address.province}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}

export default AddressDetail
