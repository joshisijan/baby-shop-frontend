import React from 'react'
import { Helmet } from 'react-helmet'
import appDetail from '../../constants/appDetail'

const AboutPage = () => {
    return (
        <div className="mt-4 md:-mt-1 p-2 md:p-6 grid justify-items-center">
            <Helmet>
                <title>About us</title>
            </Helmet>
            <div className="w-full max-w-6xl">
                <h1 className="mb-4 text-xl font-bold">About us</h1>
                <h1 className="mb-4 text-lg font-medium">{appDetail.appName}</h1>
                <p>
                    {appDetail.appDescription}
                </p>
            </div>
        </div>
    )
}

export default AboutPage
