import React from 'react'

const DarkOutlineTextButton = ({children, className, ...rest}) => {
    return (
        <button  
            {...rest}
            className={`transition text-black border-black border-2 hover:bg-black hover:text-white focus:outline-none focus:bg-black focus:text-white focus:ring focus:ring-gray-600 px-4 py-2 ${className}`}
        >
            {children}
        </button>
    )
}

export default DarkOutlineTextButton
