import { Tab } from '@headlessui/react'
import { CollectionIcon, PlusIcon } from '@heroicons/react/outline'
import AddAddress from './AddAddress/AddAddress'
import AddressList from './AddressList/AddressList'

const ShippingInfo = () => {
    const tabHeaders = [
        {
            label: 'List of address',
            icon: < CollectionIcon className="w-5 h-5" />
        },
        {
            label: 'Add new address',
            icon: < PlusIcon className="w-5 h-5" />
        },
    ]
    return (
        <div className="md:px-4">
            <Tab.Group as="div" className="border">
                <Tab.List className="flex">
                    {
                        tabHeaders.map((tabHeader) => {
                            return (
                                <Tab key={tabHeader.label} className="flex-1 focus:outline-none bg-secondary-varient bg-opacity-50">
                                    {({ selected }) => {
                                        return (
                                            <div className={`w-full h-full px-4 py-2 font-medium inline-flex gap-2 items-center transition ${selected ? 'bg-white' : 'hover:bg-secondary-light'}`}>
                                                {tabHeader.icon}{tabHeader.label}
                                            </div>
                                        )
                                    }}
                                </Tab>
                            )
                        })
                    }
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel><AddressList /></Tab.Panel>
                    <Tab.Panel><AddAddress /></Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default ShippingInfo
