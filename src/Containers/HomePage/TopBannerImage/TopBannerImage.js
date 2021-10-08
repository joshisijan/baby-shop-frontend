import React from 'react'
import toast from 'react-hot-toast'
import PrimaryTextButton from '../../../Components/Button/PrimaryTextButton'
import homeTopBanner from '../../../static/image/homeTopBanner.jpg'

const TopBannerImage = () => {
    return (
        <div className="px-2 lg:px-6 mt-2 grid justify-items-center">
            <div className="relative overflow-hidden max-w-6xl h-full w-full aspect-w-1 aspect-h-1 md:aspect-w-5 md:aspect-h-3 lg:aspect-w-5 lg:aspect-h-2">
                <div>
                    <img
                        className="object-cover w-full h-full"
                        alt="Top Banner"
                        src={homeTopBanner}
                    />
                </div>
                <div className="p-10 absolute inset-0 bg-black bg-opacity-20 grid justify-items-center">
                    <div className="h-full max-w-md flex flex-col justify-center items-end">
                        <h1 className="text-4xl font-bold text-white">New arrivals</h1>
                        <p className="text-right text-gray-100">
                            Adipisicing laboris id anim consequat commodo dolore in dolore consequat amet amet mollit eiusmod.
                        </p>
                        <PrimaryTextButton className="mt-4">Shop Now</PrimaryTextButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBannerImage
