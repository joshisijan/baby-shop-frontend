import React from 'react'
import { useSelector } from 'react-redux'
import LoadingOverlay from '../../../Components/LoadingOverlay/LoadingOverlay'
import { baseUrl } from '../../../constants/apiUrl'
import CartItem from './CartItem/CartItem'
import FadeTransition from '../../../Components/Transition/FadeTransition'
import { Link } from 'react-router-dom'

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

            <div className="divide-y">
                {cartState.data.cart_items.map((cartItem) => {
                    return (
                        <Link key={cartItem.id} to={`/product/${cartItem.product.id}`}>
                            <CartItem                            
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
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default CartItemList
