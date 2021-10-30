import React, { useEffect, useState } from 'react'
import SecondaryTextButton from '../../../Components/Button/SecondaryTextButton'
import { HeartIcon } from '@heroicons/react/outline'
import DarkOutlineTextButton from '../../../Components/Button/DarkOutlineTextButton'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveColor } from '../../../features/productDetail/productDetailSlice'

const AddToCart = () => {
    const dispatch = useDispatch()
    const [activeSizeIndex, setActiveSizeIndex] = useState(0)
    const activeColor = "ring-2 ring-offset-1 ring-secondary-dark-extra ring-offset-white";
    const activeSize = "bg-black text-white";
    const productDetailState = useSelector(state => state.productDetail)
    const productVarientData = productDetailState.data.product_variant
    const activeProductData = productDetailState.data.activeProductDetail
    const handleChangeColor = (data) => {
        dispatch(changeActiveColor(data));
    }

    useEffect(() => { 
        setActiveSizeIndex(0);
    },[activeProductData]);

    return (
        <div className="space-y-4">
            <div>
                <span className="text-xs font-semibold">Color</span>
                <div className="mt-1 flex gap-2 flex-wrap">
                    {
                        Object.values(productVarientData).map((productColor, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleChangeColor(productColor)}
                                    style={{ backgroundColor: `${productColor.color.code}` }}
                                    className={`w-8 h-8 rounded-full transition transform hover:-translate-y-0.5 ${activeProductData === {} ? '' : activeProductData.color.id === productColor.color.id ? activeColor : ''}`}
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
                    {
                        activeProductData.sizes.map((size, index) => {
                            return (
                                <DarkOutlineTextButton 
                                    key={index}
                                    onClick={() => setActiveSizeIndex(index)}
                                    className={`px-6 ${activeSizeIndex === index ? activeSize : ''}`}
                                >
                                    {size.symbol}
                                </DarkOutlineTextButton>
                            );
                        })
                    }
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
