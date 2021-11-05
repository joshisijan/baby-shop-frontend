import React from 'react'
import NormalLink from '../../../Components/NormalLink/NormalLink'

import {
    MailIcon,
    PhoneIcon,
    AtSymbolIcon,
    LinkIcon
} from '@heroicons/react/outline'
import { Link } from 'react-router-dom'

import appDetail from '../../../constants/appDetail'

const Footer = () => {
    return (
        <div className="bg-primary-varient p-4 md:p-6 pt-8 grid justify-items-center">
            <div className="max-w-6xl grid gap-4 lg:grid-cols-2 pb-16">
                <div className="space-y-2">
                    <h1 className="font-bold">{appDetail.appName} - {appDetail.appMoto}</h1>
                    <p className="text-xs font-semibold">
                        {appDetail.appDescription}
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <h1 className="font-bold">Information</h1>
                        <ul className="text-sm space-y-2">
                            <li>
                                <Link to="/about">
                                    <NormalLink className="flex gap-2 items-center">
                                        <LinkIcon className="w-4 h-4" /> About us
                                    </NormalLink>
                                </Link>
                            </li>
                            <li>
                                <NormalLink className="flex gap-2 items-center">
                                    <LinkIcon className="w-4 h-4" /> Frequently asked questions
                                </NormalLink>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-bold">Connect</h1>
                        <ul className="text-sm space-y-2">
                            <li>
                                <NormalLink className="flex gap-2 items-center">
                                    <MailIcon className="w-4 h-4" /> Contact us
                                </NormalLink>
                            </li>
                            <li>
                                <NormalLink>
                                    <a href="mailto:email@email.com" className="flex gap-2 items-center">
                                        <AtSymbolIcon className="w-4 h-4" /> email@email.com
                                    </a>
                                </NormalLink>
                            </li>
                            <li>
                                <NormalLink className="flex gap-2 items-center">
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
