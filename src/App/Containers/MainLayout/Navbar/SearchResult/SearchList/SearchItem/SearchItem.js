import React from 'react'
import Price from './Price/Price'
import { Link } from 'react-router-dom'

const SearchItem = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="space-y-2 flex flex-col items-center">
            <div className="aspect-w-1 aspect-h-1 w-full h-full">
                <img className="object-cover" src={product.thumbnail} alt={product.name} />
            </div>
            <div className="font-medium">
                {product.name}
            </div>
            <div className="text-sm font-medium">
                <Price price={product.price} discount={product.discount_percentage} />
            </div>
        </Link>
    )
}

export default SearchItem
