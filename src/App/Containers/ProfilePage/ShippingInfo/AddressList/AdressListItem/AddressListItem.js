import {
    PhoneIcon,
    UserIcon,
    LocationMarkerIcon,
} from '@heroicons/react/outline'

const AddressListItem = ({ address }) => {
    return (
        <div className="p-4 border rounded-2xl">
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
            <div className="space-x-2">
                {
                    address.is_default_shipping ?
                        <span className="px-2 py-1 text-xs rounded-2xl border border-green-600 bg-green-100">
                            Default shipping
                        </span>
                        : null
                }
                {
                    address.is_default_billing ?
                        <span className="px-2 py-1 text-xs rounded-2xl border border-green-600 bg-green-100">
                            Default billing
                        </span>
                        : null
                }
            </div>
        </div>
    )
}

export default AddressListItem
