import React from 'react'

const SecondaryTextButton = ({children, className, ...rest}) => {
    return (
        <button  
            {...rest}
            className={`transition bg-secondary text-gray-700 hover:bg-secondary-light focus:outline-none focus:ring focus:ring-secondary-varient px-4 py-2 ${className}`}
        >
            {children}
        </button>
    )
}

export default SecondaryTextButton
