import React from 'react'
import CartItem from './CartItem/CartItem'

const CartItemList = () => {
    const cartItemList = [
        {
            id: 1,
            name: 'Fury Boot',
            image: 'http://placekitten.com/200/300',
            color: 'Brown',
            size: 'Large',
            price: 3000,
            quantity: 2,
        },
        {
            id: 2,
            name: 'Fury Jacket',
            image: 'http://placekitten.com/200/301',
            color: 'Blue',
            size: 'Medium',
            price: 5000,
            quantity: 1,
        },
        {
            id: 3,
            name: 'Winter Gloves',
            image: 'http://placekitten.com/200/302',
            color: 'Gray',
            size: 'Small',
            price: 800,
            quantity: 4,
        }
    ]
    return (
        <div className="divide-y">
            {cartItemList.map((cartItem) => {
                return (
                    <CartItem
                        key={cartItem.id}
                        name={cartItem.name}
                        image={cartItem.image}
                        color={cartItem.color}
                        size={cartItem.size}
                        price={cartItem.price}
                        quantity={cartItem.quantity}
                    />
                )
            })}
        </div>
    )
}

export default CartItemList
