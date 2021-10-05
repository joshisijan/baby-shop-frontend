import React, { useEffect } from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

const MainLayout = (props) => {
    useEffect(() => {
       scrollToTop(); 
    });
    // scroll to top in new page
    const scrollToTop = () => {
        if(window.scrollY !== 0) {
            window.scrollTo(0,0);
        }
    }

    return (
        <div>
            <Navbar />
            <div className="pt-32">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
