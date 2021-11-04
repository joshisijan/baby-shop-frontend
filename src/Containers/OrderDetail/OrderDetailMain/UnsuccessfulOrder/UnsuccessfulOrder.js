import React from 'react'

const UnsuccessfulOrder = ({status}) => {
    return (
        <div className="p-4 border bg-red-50 text-red-600 border-red-600 rounded-b-lg flex gap-2 items-center flex-wrap">
            <div className="font-medium">
                Order status:
            </div>
            <div className="text-sm font-medium bg-red-600 text-white px-4 py-1.5 rounded-3xl">
                {status}
            </div>
        </div>
    )
}

export default UnsuccessfulOrder
