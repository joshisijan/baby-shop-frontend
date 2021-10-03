import React from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

const MainLayout = (props) => {
    return (
        <div>
            <Navbar />
            <div className="pt-28">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
