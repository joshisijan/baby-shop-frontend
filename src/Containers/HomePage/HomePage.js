import React from 'react'
import NewArrivals from './NewArrivals/NewArrivals'
import TopBannerImage from './TopBannerImage/TopBannerImage'
import ProductNotFound from './ProductNotFound/ProductNotFound'

const HomePage = () => {
    return (
        <div>
            <TopBannerImage className="-mt-5" />
            <NewArrivals />
            <ProductNotFound />
        </div>
    )
}

export default HomePage
