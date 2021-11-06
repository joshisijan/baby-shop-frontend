import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchWishlistList } from '../../features/wishlist/wishlistAction'
import NoLoginWishlist from './NoLoginWishlist/NoLoginWishlist'
import WishlistError from './WishlistError/WishlistError'
import WishlistLoading from './WishlistLoading/WishlistLoading'
import WishlistMain from './WishlistMain/WishlistMain'
import WishlistMenu from './WishlistMain/WishlistMenu/WishlistMenu'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'


const WishlistPage = () => { 
    const history = useHistory()
    const dispatch = useDispatch()
    const userDetailState = useSelector(state => state.userDetail)
    const wishlistState = useSelector(state => state.wishlist)

    useEffect(() => {
        if (userDetailState.accessToken !== null && history.action === 'PUSH') {
            dispatch(fetchWishlistList())
        }
    }, [dispatch, userDetailState.accessToken, history.action])

    return (
        <div className="mt-4 md:-mt-1 p-2 md:p-6 grid justify-items-center">
            <Helmet>
                <title>Wishlist</title>
            </Helmet>
            <div className="px-4 w-full max-w-6xl">
                <h1 className="mb-4 flex justify-between items-center relative">
                    <span className="text-xl font-bold">My wishlist</span>
                    {
                        wishlistState.data !== null ?
                            wishlistState.data.count > 0 ?
                                <WishlistMenu />
                            : null
                        : null
                    }
                </h1>
                {
                    userDetailState.accessToken === null ?
                        <NoLoginWishlist />
                        :
                        wishlistState.isLoading || wishlistState.data === null ?
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
