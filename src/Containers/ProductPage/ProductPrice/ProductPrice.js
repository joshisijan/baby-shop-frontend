import React from 'react'

const ProductPrice = ({price, discount}) => {
    return (
        <>
          {
              discount === 0 ? 
              <div>
                  Rs. {price}
              </div> : 
              <div className="space-x-0.5">
                    <span className="text-red-600">Rs. { price - price * (discount / 100) }</span><span className="line-through">{price}</span>
              </div>
          }  
        </>
    )
}

export default ProductPrice
