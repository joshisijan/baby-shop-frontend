import currencyFormatter from '../../../services/currencyFormatter'

const ProductPrice = ({price, discount}) => {
    const actualPrice = price - price * (discount / 100);
    return (
        <>
          {
              discount === 0 ? 
              <div>
                  { currencyFormatter(price) }
              </div> : 
              <div className="space-x-0.5">
                    <span className="text-red-600">{ currencyFormatter(actualPrice) }</span><span className="line-through">{ currencyFormatter(price) }</span>
              </div>
          }  
        </>
    )
}

export default ProductPrice
