import { Link } from 'react-router-dom'
import currencyFormatter from '../../../../services/currencyFormatter'
import { baseUrl } from '../../../../constants/apiUrl'

const CheckoutItem = ({ item }) => {
    const productId = item.id
    const name = item.product_name
    const image = baseUrl + item.thumbnail
    const price = item.price
    const quantity = item.quantity
    const discount = item.discount_percentage
    const discountPrice = item.discounted_price
    return (
        <div className="py-4 space-y-2">
            <div className="flex items-start gap-2 md:gap-4 lg:gap-8"
            >
                <Link to={`/product/${productId}/`} className="self-top bg-primary-varient w-24 h-24 overflow-hidden">
                    <img className="object-cover w-full h-full" alt={name} src={image} />
                </Link>
                <div className="flex-1 flex gap-2">
                    <div className="flex-1 flex gap-1 flex-col">
                        <Link to={`/product/${productId}/`} className="self-start line-clamp-2 text-sm font-semibold">{name}</Link>
                        <div className="divide-x divide-gray-600">
                            <span className="text-xs pr-2">{'color'}</span>
                            <span className="text-xs pl-2">{'size'}</span>
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
                        <div className="text-sm font-medium">
                            Quantity: {quantity}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem
