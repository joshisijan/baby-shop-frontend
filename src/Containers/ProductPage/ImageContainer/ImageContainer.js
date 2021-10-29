import React, { useState } from 'react'
import { baseUrl } from '../../../constants/apiUrl';

const ImageContainer = ({className, imageList}) => {
    const [imageIndex, setImageIndex] = useState(0);
    return (
        <div className={`gap-2 flex flex-col ${className}`}>
            <div className="md:order-2 aspect-w-2 aspect-h-3 bg-gray-200 rounded-sm">
                {
                    imageList.length !== 0 ? 
                    <img className="w-full rounded-sm object-cover" alt="product" src={baseUrl + imageList[imageIndex].image} />
                    : null
                }
            </div>
            <div className="md:order-1 grid grid-cols-4 gap-2">
                {
                    imageList.map((image, index) => {
                        return (
                            <div className={`aspect-w-2 aspect-h-3 bg-gray-200 rounded-sm cursor-pointer ${index === imageIndex ? 'ring-4 ring-secondary-dark ring-offset-2 ring-offset-white' : ''}`} onClick={() => setImageIndex(index)} key={index}>
                                <img className="w-full rounded-sm object-cover" alt="product" src={baseUrl + image.image} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImageContainer
