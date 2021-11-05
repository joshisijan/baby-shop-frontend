import { Tab } from '@headlessui/react'
import Logout from './Logout/Logout';
import Detail from './Detail/Detail';
import ShippingInfo from './ShippingInfo/ShippingInfo'
import { IdentificationIcon, LocationMarkerIcon, LogoutIcon } from '@heroicons/react/outline';

const ProfilePage = () => {

    const tabHeaders = [ 
        {
            label: 'Detail',
            icon: < IdentificationIcon className="w-5 h-5" />
        },
        {
            label: 'Shipping info',
            icon: < LocationMarkerIcon className="w-5 h-5" />
        },
        {
            label: 'Logout',
            icon: < LogoutIcon className="w-5 h-5" />
        },
        {
            label: null,
            icon: null
        },
    ]

    return (
        <div className="grid justify-items-center">
            <Tab.Group as="div" vertical className="p-6 max-w-6xl h-full w-full flex flex-col md:flex-row">
                <Tab.List className="flex md:flex-col md:items-start flex-wrap gap-2">
                    {
                        tabHeaders.map((tabHeader, index) => {
                            const disabled = tabHeader.label === null || tabHeader.icon === null // to disable empty box to fix flex wrap on small devices

                            if(disabled) return <div key={index} className="flex-1"></div>

                            return (
                                <Tab key={index}  className="flex-1 md:flex-initial focus:outline-none">
                                    {({ selected }) => {
                                        return (
                                            <div className={`w-full h-full rounded-2xl inline-flex gap-2  items-center md:border-none px-8 py-2 transition transform ${selected ? 'bg-secondary-varient' : 'bg-secondary bg-opacity-20 hover:bg-secondary hover:bg-opacity-30'}`}>
                                                {tabHeader.icon}{tabHeader.label}
                                            </div>
                                        )
                                    }} 
                                </Tab>
                            )   
                        })
                    }   
                </Tab.List>
                <Tab.Panels className="flex-1 py-4 md:py-0">
                    <Tab.Panel><Detail /></Tab.Panel>
                    <Tab.Panel><ShippingInfo /></Tab.Panel>
                    <Tab.Panel><Logout /></Tab.Panel>
                </Tab.Panels>
            </Tab.Group>     
        </div> 
    ) 
}

export default ProfilePage
