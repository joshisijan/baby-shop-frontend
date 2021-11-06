import { Tab } from '@headlessui/react'
import React from 'react'
import { Helmet } from 'react-helmet'
import LoginTab from './LoginTab/LoginTab'
import RegisterTab from './RegisterTab/RegisterTab'

const AccountOptionPage = () => {
    const tabHeaders = [
        'Login',
        'Create account'
    ]
    return (
        <div className="grid justify-items-center p-2">
            <Helmet>
                <title>Login | Create account</title>
            </Helmet>
            <div className="my-10 w-full max-w-md">
                <Tab.Group as="div" defaultIndex={0} className="border rounded-2xl">
                    <Tab.List className="flex gap-1">
                        {
                            tabHeaders.map((tabHeader) => {
                                return (
                                    <Tab key={tabHeader} className="flex-1 focus:outline-none">
                                        {({ selected }) => {
                                            return (
                                                <div className={`px-4 py-2 font-bold rounded-2xl text-lg w-full transition ${selected ? 'bg-secondary-varient' : 'bg-secondary bg-opacity-5 hover:bg-secondary hover:bg-opacity-30'}`}>
                                                    {tabHeader}
                                                </div>
                                            )
                                        }}
                                    </Tab>
                                )
                            })
                        }
                    </Tab.List>
                    <Tab.Panels className="p-4">
                        <Tab.Panel>
                            <LoginTab />
                        </Tab.Panel>
                        <Tab.Panel>
                            <RegisterTab />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}

export default AccountOptionPage
