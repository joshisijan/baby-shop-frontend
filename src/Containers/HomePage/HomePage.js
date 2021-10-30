import React from 'react'
import NewArrivals from './NewArrivals/NewArrivals'
import ProductNotFound from './ProductNotFound/ProductNotFound'

const HomePage = () => {
    return (
        <div>
            <NewArrivals className="-mt-5" />
            <ProductNotFound />
        </div>
    )
}

export default HomePage
