import React from 'react'
import SecondaryTextButton from '../../../Components/Button/SecondaryTextButton'
import { HeartIcon } from '@heroicons/react/outline'
import DarkOutlineTextButton from '../../../Components/Button/DarkOutlineTextButton'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveColor } from '../../../features/productDetail/productDetailSlice'

const AddToCart = () => {
    const dispatch = useDispatch()
    const activeColor = "ring-2 ring-offset-1 ring-secondary-dark-extra ring-offset-white";
    const activeSize = "bg-black text-white";
    const productDetailState = useSelector(state => state.productDetail)
    const productInventoryData = productDetailState.data.product_inventory
    const activeProductData = productDetailState.data.activeProductDetail
    const handleChangeColor = (colorId) => {
        dispatch(changeActiveColor(colorId));
    }
    return (
        <div className="space-y-4">
            <div>
                <span className="text-xs font-semibold">Color</span>
                <div className="mt-1 flex gap-2 flex-wrap">
                    {
                        productInventoryData.map((productColor, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleChangeColor(productColor.product_color.color.id)}
                                    style={{ backgroundColor: `${productColor.product_color.color.color_code}` }}
                                    className={`w-8 h-8 rounded-full transition transform hover:-translate-y-0.5 ${activeProductData === null ? '' : activeProductData.product_color.id === productColor.product_color.id ? activeColor : ''}`}
                                >
                                </button>
                            )
                        })
                    }
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
