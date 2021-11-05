import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PrimaryTextButton from '../../../Components/Button/PrimaryTextButton'
import EndOfTag from '../../../Components/EndOfTag/EndOfTag'
import { getNextData } from '../../../features/wishlist/wishlistAction'
import WishlistItem from './WishlistItem/WishlistItem'

const WishlistMain = () => {
    const dispatch = useDispatch()
    const wishlistState = useSelector(state => state.wishlist)
    const data = wishlistState.data.results

    const handleNext = () => {
        dispatch(getNextData(wishlistState.data.next));
    }

    return (
        <div>
            {
                data.length === 0 ?
                    <div className="p-4 my-10 rounded-lg border border-red-600 bg-red-50 font-medium text-red-600">
                        Your wishlist is empty
                    </div>
                    :
                    <div className="mt-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            {
                                data.map((wishlist) => {
                                    return (
                                        <div key={wishlist.id}>
                                            <WishlistItem
                                                item={wishlist}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        {
                            wishlistState.data.next !== null ?
                                <div className="flex justify-center">
                                    <PrimaryTextButton isLoading={wishlistState.isLoadingNext} onClick={handleNext}>
                                        Load More
                                    </PrimaryTextButton>
                                </div>
                                :
                                <EndOfTag />
                        }
                    </div>
            }
        </div>
    )
}
export default WishlistMain
