import {
    XIcon,
    CheckIcon
} from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { removeCartitem } from '../../../../features/cart/cartAction'
import QuantitySelector from './QuantitySelector/QuantitySelector'

const CartItem = ({
    id,
    name,
    image,
    price,
    discount,
    color,
    size,
    quantity,
    stockAvailable,
    availableQuantity,
    ...rest
}) => {
    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(removeCartitem(id))
    }

    return (
        <div className="py-4 space-y-2">
            <div
                {...rest}
                className="flex items-start gap-2 md:gap-4 lg:gap-8"
            >
                <div className="self-center bg-primary-varient w-24 h-24 overflow-hidden">
                    <img className="object-cover w-full h-full" alt={name} src={image} />
                </div>
                <div className="flex-1 flex">
                    <div className="flex-1 flex gap-1 flex-col">
                        <span className="line-clamp-2 text-sm font-semibold">{name}</span>
                        <div className="divide-x divide-gray-600">
                            <span className="text-xs pr-2">{color}</span>
                            <span className="text-xs pl-2">{size}</span>
                        </div>
                        <span className="font-semibold">
                            Rs. &nbsp;
                            {
                                discount === 0 ?
                                    price
                                    :
                                    <span className="space-x-1">
                                        <span className="text-red-600">{price - price * (discount / 100)}</span>
                                        <span className="line-through">{price}</span>
                                    </span>
                            }
                        </span>
                        <QuantitySelector id={id} quantity={quantity} availableQuantity={availableQuantity} />
                    </div>
                    <div className="flex flex-col justify-between items-end">
                        <button onClick={handleRemove} className="transition text-black hover:text-gray-900 focus:outline-none focus:ring focus:ring-primary-varient">
                            <XIcon className="w-5 h-5" />
                        </button>

                    </div>
                </div>
            </div>
            <div>
                {
                    stockAvailable ?
                        <span className="flex flex-wrap justify-end text-xs font-medium"><CheckIcon className="w-4 h-4 text-green-600" /> In stock</span>
                        :
                        <span className="flex flex-wrap justify-end text-xs font-medium"><XIcon className="w-4 h-4 text-red-600" /> Out of stock</span>
                }
                <div className="flex flex-wrap justify-end text-xs font-medium">
                    Available quantity: <span className="text-red-600">{availableQuantity}</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem
