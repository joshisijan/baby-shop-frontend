import React from 'react'
import NormalLink from '../../../Components/NormalLink/NormalLink'

import {
    MailIcon,
    PhoneIcon,
} from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="bg-primary-varient p-6 pb-12 grid justify-items-center">
            <div className="max-w-6xl grid gap-4 lg:grid-cols-2">
                <div className="space-y-2">
                    <h1 className="font-bold">BabyShop - everything for baby</h1>
                    <p className="text-xs font-semibold">
                        Ad ullamco velit mollit est nostrud officia pariatur sunt anim labore irure duis anim ipsum.
                        Ad ullamco velit mollit est nostrud officia pariatur sunt anim labore irure duis anim ipsum.
                        Ad ullamco velit mollit est nostrud officia pariatur sunt anim labore irure duis anim ipsum.
                        Ad ullamco velit mollit est nostrud officia pariatur sunt anim labore irure duis anim ipsum.
                        Ad ullamco velit mollit est nostrud officia pariatur sunt anim labore irure duis anim ipsum.
                        Ad ullamco velit mollit est nostrud officia pariatur sunt anim labore irure duis anim ipsum.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <h1 className="font-bold">Information</h1>
                        <ul className="text-sm">
                            <li>
                                <Link to="/about">
                                    <NormalLink>
                                        About us
                                    </NormalLink>
                                </Link>
                            </li>
                            <li>
                                <NormalLink>
                                    Frequently asked questions
                                </NormalLink>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-bold">Connect</h1>
                        <ul className="text-sm">
                            <li>
                                <NormalLink>
                                    <a href="mailto:email@email.com" className="flex items-center">
                                        <MailIcon className="w-4 h-4" /> email@email.com
                                    </a>
                                </NormalLink>
                            </li>
                            <li>
                                <NormalLink className="flex items-center">
                                    <PhoneIcon className="w-4 h-4" />+9779860073492
                                </NormalLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
