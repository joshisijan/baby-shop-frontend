import { DotsVerticalIcon } from '@heroicons/react/solid'
import { Menu } from '@headlessui/react'
import { TrashIcon } from '@heroicons/react/outline'
import LoadingOverlay from '../../../../Components/LoadingOverlay/LoadingOverlay'
import { useDispatch, useSelector } from 'react-redux'
import { hideDialog, showDialog } from '../../../../features/alertDialog/alertDialogSlice'
import { removeAllWishlist } from '../../../../features/wishlist/wishlistAction'

const WishlistMenu = () => {
    const dispatch = useDispatch()
    const wishlistState = useSelector(state => state.wishlist)
    const handleRemoveAll = () => {
        dispatch(showDialog({
            header: 'Remove all',
            description: `Remove all products from your wishlist?`,
            onYes: () => {
                dispatch(hideDialog())
                dispatch(removeAllWishlist());
            }
        }))
    }

    return (
        <Menu>
            {
                wishlistState.isRemovingAll ?
                    <LoadingOverlay label="Removing..." />
                    : null
            }
            <Menu.Button>
                <DotsVerticalIcon className="w-5 h-5" />
            </Menu.Button>
            <Menu.Items className="mt-1 rounded-lg z-10 absolute right-0 top-full flex gap-2 flex-col items-stretch border p-2 bg-white">
                <Menu.Item
                    as="button"
                    onClick={handleRemoveAll}
                    className="py-1.5 px-4 rounded-lg flex gap-2 items-center justify-start bg-primary-varient hover:bg-primary-light"
                >
                    <TrashIcon className="w-5 h-5" /> Remove all
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}

export default WishlistMenu
