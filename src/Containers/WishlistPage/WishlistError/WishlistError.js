import React from 'react'
import { useDispatch } from 'react-redux'
import PrimaryTextButton from '../../../Components/Button/PrimaryTextButton'
import { fetchWishlistList } from '../../../features/wishlist/wishlistAction'

const WishlistError = () => {
    const dispatch = useDispatch()
    const refresh = () => {
        dispatch(fetchWishlistList())
    }
    return (
        <div className="flex gap-2 flex-col items-center py-6 px-4">
            <div className="text-red-600">
                Error loading your wishlist. Try again later.
            </div>
            <PrimaryTextButton onClick={refresh}>
                Refresh
            </PrimaryTextButton>            
        </div>
    )
}

export default WishlistError
