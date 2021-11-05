import { Link } from 'react-router-dom'
import currencyFormatter from '../../../../services/currencyFormatter'
import { baseUrl } from '../../../../constants/apiUrl'
import { useDispatch } from 'react-redux'
import {
    TrashIcon,
} from '@heroicons/react/outline'
import { hideDialog, showDialog } from '../../../../features/alertDialog/alertDialogSlice'
import { removeFromWishlist } from '../../../../features/wishlist/wishlistAction'

const WishlistItem = ({ item }) => {
    const dispatch = useDispatch()
    const productId = item.product.id
    const inventoryId = item.inventory.id
    const name = item.product.name
    const image = baseUrl + item.variant_image
    const price = item.product.price
    const size = item.inventory.size
    const color = item.inventory.color
    const discount = item.product.discount_percentage
    const discountPrice = item.product.discounted_price

    const handleRemove = () => {
        dispatch(showDialog({
            header: 'Remove from wishlist',
            description: `Remove ${color} ${name} sized ${size} from your wishlist?`,
            onYes: () => {
                dispatch(hideDialog())
                dispatch(removeFromWishlist(inventoryId));
            }
        }));
    }

    return (
        <div className="p-4 space-y-2 shadow bg-secondary bg-opacity-20 rounded-2xl">
            <div className="flex items-start gap-2 md:gap-4 lg:gap-8"
            >
                <Link to={`/product/${productId}/`} className="rounded-lg self-top bg-primary-varient w-24 h-24 overflow-hidden">
                    <img className="rounded-lg object-cover w-full h-full" alt={name} src={image} />
                </Link>
                <div className="flex-1 flex gap-2">
                    <div className="flex-1 flex gap-1 flex-col">
                        <Link to={`/product/${productId}/`} className="self-start line-clamp-2 text-sm font-semibold">{name}</Link>
                        <div className="divide-x divide-gray-600">
                            <span className="text-xs pr-2">{color}</span>
                            <span className="text-xs pl-2">{size}</span>
                        </div>
                        <span className="font-semibold text-sm sm:text-base">
                            {
                                discount === 0 ?
                                    price
                                    :
                                    <span className="space-x-1">
                                        <span className="text-red-600">{currencyFormatter(discountPrice)}</span>
                                        <span className="line-through">{currencyFormatter(price)}</span>
                                    </span>
                            }
                        </span>
                    </div>
                </div>
                <button onClick={handleRemove}>
                    <TrashIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

export default WishlistItem
