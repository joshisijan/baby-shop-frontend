import React, { useEffect } from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { fetchCategoryList } from '../../features/categoryList/categoryListAction';
const MainLayout = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        scrollToTop();
    });
    // scroll to top in new page
    const scrollToTop = () => {
        if (window.scrollY !== 0) {
            window.scrollTo(0, 0);
        }
    }

    // for getting container
    useEffect(() => {
        dispatch(fetchCategoryList());
    }, [dispatch]);

    return (
        <div>
            <Toaster
                position="top-right"
            />
            <Navbar />
            <div style={{paddingTop: '9.5rem'}}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
