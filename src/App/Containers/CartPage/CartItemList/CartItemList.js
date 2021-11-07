import React from 'react'
import { useSelector } from 'react-redux'
import LoadingOverlay from '../../../Components/LoadingOverlay/LoadingOverlay'
import { baseUrl } from '../../../constants/apiUrl'
import CartItem from './CartItem/CartItem'
import FadeTransition from '../../../Components/Transition/FadeTransition'

const CartItemList = () => {
    const cartState = useSelector(state => state.cart)
    return (
        <div>
            <FadeTransition show={cartState.isRemoving}>
                <LoadingOverlay label="Removing from cart..." />
            </FadeTransition>

            <FadeTransition show={cartState.isUpdating}>
                <LoadingOverlay label="Updating cart item..." />
            </FadeTransition>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
                {cartState.data.cart_items.map((cartItem) => {
                    return (
                        <CartItem
                            key={cartItem.id}
                            productId={cartItem.product.id}
                            id={cartItem.id}
                            name={cartItem.product.name}
                            image={baseUrl + cartItem.variant_image}
                            color={cartItem.inventory.color}
                            size={cartItem.inventory.size}
                            price={cartItem.product.price}
                            discount={cartItem.product.discount_percentage}
                            stockAvailable={cartItem.inventory.available_quantity >= cartItem.quantity}
                            availableQuantity={cartItem.inventory.available_quantity}
                            quantity={cartItem.quantity}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default CartItemList
