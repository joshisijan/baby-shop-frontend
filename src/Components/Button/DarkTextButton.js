import React from 'react'

const DarkTextButton = ({children, className, ...rest}) => {
    return (
        <button  
            {...rest}
            className={`px-3 py-2 transition text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-600 ${className}`}
        >
            {children}
        </button>
    )
}

export default DarkTextButton
