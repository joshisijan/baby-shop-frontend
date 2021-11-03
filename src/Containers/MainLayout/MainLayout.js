import React, { useEffect } from 'react'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryList } from '../../features/categoryList/categoryListAction';
import { fetchCartList } from '../../features/cart/cartAction';
import { fetchtUserDetail } from '../../features/userDetail/userDetailAction';
import AlertDialog from '../../Components/AlertDialog/AlertDialog'

const MainLayout = (props) => {

    const dispatch = useDispatch();

    const userDetailState = useSelector(state => state.userDetail)
    const categoryListState = useSelector(state => state.categoryList)
    const cartState = useSelector(state => state.cart)

    useEffect(() => {
        scrollToTop();
    });
    // scroll to top in new page
    const scrollToTop = () => {
        if (window.scrollY !== 0) {
            window.scrollTo(0, 0);
        }
    }

    // fetching category only if not loaded
    useEffect(() => {
        if(!categoryListState.isLoaded) {
            dispatch(fetchCategoryList());
        }
    }, [dispatch, categoryListState.isLoaded]);

    // fetching cart only if not loaded
    useEffect(() => {
        if(!cartState.isLoaded) {
            dispatch(fetchCartList());
        }
    }, [dispatch, cartState.isLoaded]);

    // fetch user detail
    useEffect(() => {
        if (userDetailState.accessToken !== null && !userDetailState.isLoaded) {
            dispatch(fetchtUserDetail());
        }
    }, [dispatch, userDetailState.accessToken, userDetailState.isLoaded]);

    return (
        <>
            <AlertDialog />
            <div>
                <Toaster
                    position="top-right"
                />
                <Navbar />
                <div style={{ paddingTop: '10rem' }}>
                    {props.children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default MainLayout
