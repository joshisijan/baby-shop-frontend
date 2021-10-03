import React from 'react'

const MenuLink = ({ className, children, ...rest }) => {
    return (
        <button
            {...rest}
            className={`p-2 text-gray-800 text-sm font-semibold capitalize focus:ring focus:ring-inset focus:ring-purple-300 ${className}`}
        >
            {children}
        </button>
    )
}

export default MenuLink
