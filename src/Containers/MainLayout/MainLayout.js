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


    // fetching category only if not loaded
    useEffect(() => {
        if(!categoryListState.isLoaded) {
            dispatch(fetchCategoryList());
        }
    }, [dispatch, categoryListState.isLoaded]);

    // fetching cart only if not loaded
    useEffect(() => {
        if(!cartState.isLoaded && userDetailState.accessToken !== null) {
            dispatch(fetchCartList());
        }
    }, [dispatch, cartState.isLoaded, userDetailState.accessToken]);

    // fetch user detail
    useEffect(() => {
        if (userDetailState.accessToken !== null && !userDetailState.isLoaded) {
            dispatch(fetchtUserDetail());
        }
    }, [dispatch, userDetailState.accessToken, userDetailState.isLoaded]);

    let topPadding = 10
    if(window.screen.width < 380) {
        topPadding = 13.5
    }

    return (
        <>
            <AlertDialog />
            <div>
                <Toaster
                    position="top-right"
                />
                <Navbar />
                <div style={{ paddingTop: `${topPadding}rem` }}>
                    {props.children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default MainLayout
