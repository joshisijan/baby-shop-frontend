import React, { useEffect } from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryList } from '../../features/categoryList/categoryListAction';
import { fetchCartList } from '../../features/cart/cartAction';
import { fetchtUserDetail } from '../../features/userDetail/userDetailAction';
const MainLayout = (props) => {

    const dispatch = useDispatch();

    const userDetailState = useSelector(state => state.userDetail)

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
        if(userDetailState.accessToken !== null) {
            dispatch(fetchtUserDetail());
        }
        dispatch(fetchCartList());
    }, [dispatch, userDetailState.accessToken]);

    return (
        <div>
            <Toaster
                position="top-right"
            />
            <Navbar />
            <div style={{paddingTop: '10rem'}}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
