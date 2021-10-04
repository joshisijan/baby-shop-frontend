import React from 'react'

const PrimaryTextButton = ({children, className, ...rest}) => {
    return (
        <button  
            {...rest}
            className={`bg-primary text-gray-700 hover:bg-primary-light focus:outline-none focus:ring focus:ring-primary-varient px-4 py-2 ${className}`}
        >
            {children}
        </button>
    )
}

export default PrimaryTextButton
