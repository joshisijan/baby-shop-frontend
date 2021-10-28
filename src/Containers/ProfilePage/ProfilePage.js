import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchtUserDetail } from '../../features/userDetail/userDetailAction';
import { Tab } from '@headlessui/react'
import Logout from './Logout/Logout';
import OrderHistory from './OrderHistory/OrderHistory';
import Detail from './Detail/Detail';
import ShippingInfo from './ShippingInfo/ShippingInfo'
import { IdentificationIcon, LocationMarkerIcon, CalendarIcon, LogoutIcon } from '@heroicons/react/outline';

const ProfilePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchtUserDetail());
    });

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
            label: 'Order history',
            icon: < CalendarIcon className="w-5 h-5" />
        },
        {
            label: 'Logout',
            icon: < LogoutIcon className="w-5 h-5" />
        },
    ]

    return (
        <div className="grid justify-items-center">
            <Tab.Group as="div" vertical className="p-6 max-w-6xl h-full w-full flex flex-col md:flex-row">
                <Tab.List className="flex md:flex-col md:items-start flex-wrap border">
                    {
                        tabHeaders.map((tabHeader) => {
                            return (
                                <Tab key={tabHeader.label} className="flex-1 md:flex-initial focus:outline-none">
                                    {({ selected }) => {
                                        return (
                                            <div className={`w-full h-full border inline-flex gap-2  items-center md:border-none px-8 py-2 transition transform ${selected ? 'font-bold' : 'hover:translate-x-0.5'}`}>
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
                    <Tab.Panel><OrderHistory /></Tab.Panel>
                    <Tab.Panel><Logout /></Tab.Panel>
                </Tab.Panels>
            </Tab.Group>     
        </div> 
    ) 
}

export default ProfilePage
