import React from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

const MainLayout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    )
}

export default MainLayout
