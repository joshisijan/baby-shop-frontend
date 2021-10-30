import { ShoppingCartIcon } from '@heroicons/react/outline'
import React from 'react'

const EmptyCart = () => {
    return (
        <div className="py-10 px-4 text-center text-gray-700 flex gap-4 flex-col justify-center items-center">
            <ShoppingCartIcon className="w-14 h-14" />
            <h1 className="text-xl font-medium">Your shopping cart is empty. Try adding some items in your cart.</h1>
        </div>
    )
}

export default EmptyCart
