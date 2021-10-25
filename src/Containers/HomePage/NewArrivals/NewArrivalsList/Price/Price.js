import React from 'react'

const Price = ({price, discount}) => {
    return (
        <>
          {
              discount === 0 ? 
              <div>
                  {price}
              </div> : 
              <div className="space-x-0.5">
                    <span className="text-red-600">{ price - price * (discount / 100) }</span><span className="line-through">{price}</span>
              </div>
          }  
        </>
    )
}

export default Price
