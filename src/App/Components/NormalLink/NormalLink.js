import React from 'react'

const NormalLink = ({children, className, ...rest}) => {
    return (
        <button
            {...rest}
            className={`flex gap-2 items-center text-gray-900 hover:text-black hover:underline transition focus:outline-none focus:ring focus:ring-primary-varient focus:underline ${className}`}
        >  
        { children }
        </button>
    )
}

export default NormalLink
