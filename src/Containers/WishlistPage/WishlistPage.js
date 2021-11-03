import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchWishlistList } from '../../features/wishlist/wishlistAction'
import NoLoginWishlist from './NoLoginWishlist/NoLoginWishlist'
import WishlistError from './WishlistError/WishlistError'
import WishlistLoading from './WishlistLoading/WishlistLoading'
import WishlistMain from './WishlistMain/WishlistMain'

const WishlistPage = () => {
    const dispatch = useDispatch()
    const userDetailState = useSelector(state => state.userDetail)
    const wishlistState = useSelector(state => state.wishlist)

    useEffect(() => {
        if(userDetailState.accessToken !== null) {
            dispatch(fetchWishlistList())
        }
    }, [dispatch, userDetailState.accessToken])

    return (
        <div className="mt-4 md:-mt-1 p-2 md:p-6 grid justify-items-center">
            <div className="w-full max-w-6xl">
                <h1 className="mb-4 text-xl font-bold">My wishlist</h1>
                {
                    userDetailState.accessToken === null ?
                        <NoLoginWishlist />
                        :
                        wishlistState.isLoading ?
                            <WishlistLoading />
                            :
                            wishlistState.error ?
                                <WishlistError />
                                :
                                <WishlistMain />
                }
            </div>
        </div>
    )
}

export default WishlistPage
