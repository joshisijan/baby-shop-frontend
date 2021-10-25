import React from 'react'

const NewArrivalsList = ({productList}) => {
    return (
        <div className="grid grid-cols-2">
            {
                productList.map((product) => {
                    return (
                        <div className="border">
                            {product.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NewArrivalsList
