import React from 'react'

const EndOfTag = ({ label = "End" }) => {
    return (
        <div className="py-4 flex gap-4 items-center">
            <div style={{height: 1.5}} className="flex-1 bg-gray-500">

            </div>
            <div className="font-medium text-gray-700">
                {label}
            </div>
            <div style={{height: 1.5}} className="flex-1 bg-gray-500">
            </div>
        </div>
    )
}

export default EndOfTag
