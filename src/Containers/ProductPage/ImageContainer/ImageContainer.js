import React, { useState } from 'react'

const ImageContainer = (props) => {
    const [imageIndex, setImageIndex] = useState(0);

    const imageList = props.imageList;
    return (
        <div className={`gap-2 flex flex-col ${props.className}`}>
            <div className="md:order-2 aspect-w-2 aspect-h-3 bg-gray-200 rounded-sm">
                <img className="w-full rounded-sm object-cover" alt="product" src={imageList[imageIndex]} />
            </div>
            <div className="md:order-1 grid grid-cols-4 gap-2">
                {
                    imageList.map((image, index) => {
                        return (
                            <div className={`aspect-w-2 aspect-h-3 bg-gray-200 rounded-sm cursor-pointer ${index === imageIndex ? 'ring-4 ring-secondary-dark ring-offset-2 ring-offset-white' : ''}`} onClick={() => setImageIndex(index)} key={image}>
                                <img className="w-full rounded-sm object-cover" alt="product" src={image} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImageContainer
