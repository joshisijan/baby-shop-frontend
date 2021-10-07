import React from 'react'

const SecondaryTextButton = ({children, className, ...rest}) => {
    return (
        <button  
            {...rest}
            className={`transition bg-secondary-dark text-gray-800 hover:bg-secondary focus:outline-none focus:ring focus:ring-secondary-varient px-4 py-2 ${className}`}
        >
            {children}
        </button>
    )
}

export default SecondaryTextButton
