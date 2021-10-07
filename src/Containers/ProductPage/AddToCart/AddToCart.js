import React from 'react'
import SecondaryTextButton from '../../../Components/Button/SecondaryTextButton'
import { HeartIcon } from '@heroicons/react/outline'
import DarkOutlineTextButton from '../../../Components/Button/DarkOutlineTextButton'

const AddToCart = () => {
    const activeColor = "ring-2 ring-offset-1 ring-secondary-dark-extra ring-offset-white";
    const activeSize = "bg-black text-white";
    return (
        <div className="space-y-4">
            <div>
                <span className="text-xs font-semibold">Color</span>
                <div className="mt-1 flex gap-2 flex-wrap">
                    <button className={`w-8 h-8 rounded-full bg-blue-600 ${activeColor}`}></button>
                    <button className="w-8 h-8 rounded-full bg-purple-600"></button>
                    <button className="w-8 h-8 rounded-full bg-red-600"></button>
                    <button className="w-8 h-8 rounded-full bg-pink-600"></button>
                </div>
            </div>
            <div>
                <span className="text-xs font-semibold">Size</span>
                <div className="mt-1 flex gap-2 flex-wrap">
                    <DarkOutlineTextButton className={`px-6 ${activeSize}`}>XXS</DarkOutlineTextButton>
                    <DarkOutlineTextButton className="px-6">XS</DarkOutlineTextButton>
                    <DarkOutlineTextButton className="px-6">S</DarkOutlineTextButton>
                    <DarkOutlineTextButton className="px-6">M</DarkOutlineTextButton>
                    <DarkOutlineTextButton className="px-6">L</DarkOutlineTextButton>
                    <DarkOutlineTextButton className="px-6">XL</DarkOutlineTextButton>
                    <DarkOutlineTextButton className="px-6">XXL</DarkOutlineTextButton>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex-1">
                    <SecondaryTextButton className="w-full">
                        Add to cart
                    </SecondaryTextButton>
                </div>
                <HeartIcon className="w-5 h-5 cursor-pointer transition text-gray-600 hover:text-secondary-dark-extra" />
            </div>
        </div>
    )
}

export default AddToCart
