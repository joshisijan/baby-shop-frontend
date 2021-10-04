import React from 'react'
import NormalLink from '../../../Components/NormalLink/NormalLink'

import { ChevronDoubleRightIcon } from '@heroicons/react/outline'

const NewArrivals = () => {
    return (
        <div className="p-6 grid justify-items-center">
            <div className="max-w-6xl w-full">
                <div className="flex justify-between">
                    <h1 className="text-xl font-bold">
                        New Arrivals
                    </h1>
                    <NormalLink>View All <ChevronDoubleRightIcon className="w-5 h-5" /></NormalLink>
                </div>
            </div>
        </div>
    )
}

export default NewArrivals
