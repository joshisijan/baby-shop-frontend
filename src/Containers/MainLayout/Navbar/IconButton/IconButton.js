import React from 'react'

const IconButton = ({ className, label, counter, children, ...rest }) => {
    return (
        <button
            {...rest}
            className={`relative p-2 rounded-lg text-gray-600 flex flex-col items-center transition hover:text-purple-500 focus:outline-none focus:ring focus:ring-inset focus:ring-purple-300 ${className}`}
        >
            {  
                counter ? 
                <div className="flex items-center">
                    {children}
                    <div className="px-1 text-sm font-bold bg-purple-500 text-gray-50 rounded">
                        {counter}
                    </div>
                </div> : 
                children
            }
            <div className="text-xs font-semibold tracking-tighter md:text-sm md:tracking-normal">
                {label}
            </div>
        </button>
    )
}

export default IconButton
