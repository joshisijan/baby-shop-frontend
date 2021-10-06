import {
    XIcon,
    CheckIcon
} from '@heroicons/react/solid'
import QuantitySelector from './QuantitySelector/QuantitySelector'

const CartItem = ({ name, image, price, color, size, quantity, ...rest }) => {
    return (
        <div
            {...rest}
            className="py-4 flex items-start gap-2 md:gap-4 lg:gap-8"
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
                    <span className="font-semibold">Rs. {price}</span>
                    <QuantitySelector quantity={quantity} />
                </div>
                <div className="flex flex-col justify-between items-end">
                    <button className="transition text-black hover:text-gray-900 focus:outline-none focus:ring focus:ring-primary-varient">
                        <XIcon className="w-5 h-5" />
                    </button>
                    <span className="text-sm self-end flex items-center"><CheckIcon className="w-4 h-4 text-green-600" /> In stock</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem
