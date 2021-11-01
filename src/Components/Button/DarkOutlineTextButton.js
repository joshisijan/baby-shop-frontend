import React from 'react'

const DarkOutlineTextButton = ({children, className, ...rest}) => {
    return (
        <button  
            {...rest}
            className={`px-3 py-1.5 transition text-black ring-1 ring-inset ring-black hover:bg-black hover:text-white focus:outline-none focus:bg-black focus:text-white focus:ring focus:ring-gray-600 ${className}`}
        >
            {children}
        </button>
    )
}

export default DarkOutlineTextButton
