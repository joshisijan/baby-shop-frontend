import {
    PhoneIcon,
    UserIcon,
    LocationMarkerIcon,
} from '@heroicons/react/outline'

const AddressDetail = ({ address, shipping = false, billing = false }) => {
    return (
        <div className="shadow border flex flex-col">
            <div className="px-4 py-2 font-medium flex flex-wrap">
                <div className="py-1 px-2 rounded-2xl border border-secondary bg-secondary bg-opacity-50">
                    {
                        shipping ?
                            'Shipping address'
                            :
                            'Billing address'
                    }
                </div>
            </div>
            <div className="px-4 pb-4">
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
            </div>
        </div>
    )
}

export default AddressDetail
