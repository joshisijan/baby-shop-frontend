import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { baseUrl } from '../../../constants/apiUrl';

const ImageContainer = ({ className, imageList = [] }) => {
    const [imageIndex, setImageIndex] = useState(0);
    const productDetailState = useSelector(state => state.productDetail)
    // use effect to reset to 0 on new varient
    useEffect(() => {
        setImageIndex(0);
    }, [productDetailState.data.activeProductDetail]);
    return (
        <div className={`gap-2 flex flex-col ${className}`}>
            <div className="md:order-2 aspect-w-2 aspect-h-3 bg-gray-200 rounded-sm">
                {
                    imageList.length === 0 ? // if no image
                        <img className="w-full rounded-sm object-cover" alt="product" src={baseUrl + productDetailState.data.product.thumbnail} />
                        : <img className="w-full rounded-sm object-cover" alt="product" src={baseUrl + imageList[imageIndex]} />
                }
            </div>
            <div className="md:order-1 grid grid-cols-4 gap-2">
                {
                    imageList.map((image, index) => {
                        return (
                            <div className={`aspect-w-2 aspect-h-3 bg-gray-200 rounded-sm cursor-pointer ${index === imageIndex ? 'ring-4 ring-secondary-dark ring-offset-2 ring-offset-white' : ''}`} onClick={() => setImageIndex(index)} key={index}>
                                <img className="w-full rounded-sm object-cover" alt="product" src={baseUrl + image} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImageContainer
