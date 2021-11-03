import React from 'react'
import Price from './Price/Price'
import { Link } from 'react-router-dom'

const NewArrivalsList = ({ productList }) => {
    return (
        <div className="py-4 grid gap-4 grid-cols-2 md:grid-cols-4">
            {
                productList.map((product) => {
                    return (
                        <Link key={product.id} to={`product/${product.id}`} className="space-y-2 flex flex-col items-center">
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
                })
            }
        </div>
    )
}

export default NewArrivalsList
