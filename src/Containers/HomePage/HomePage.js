import React from 'react'
import MainLayout from '../MainLayout/MainLayout'
import NewArrivals from './NewArrivals/NewArrivals'
import TopBannerImage from './TopBannerImage/TopBannerImage'

const HomePage = () => {
    return (
        <MainLayout>
            <TopBannerImage />
            <NewArrivals />
        </MainLayout>
    )
}

export default HomePage
