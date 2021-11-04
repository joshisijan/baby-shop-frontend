import React from 'react'

const EndOfTag = ({ label = "End" }) => {
    return (
        <div className="py-4 flex gap-4 items-center">
            <div className="flex-1 h-0.5 bg-gray-700">

            </div>
            <div className="font-medium">
                {label}
            </div>
            <div className="flex-1 h-0.5 bg-gray-700">
            </div>
        </div>
    )
}

export default EndOfTag
