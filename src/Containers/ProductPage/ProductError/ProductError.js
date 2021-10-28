import React from 'react'
import { useDispatch } from 'react-redux'
import PrimaryTextButton from '../../../Components/Button/PrimaryTextButton'
import { fetchProductDetail } from '../../../features/productDetail/productDetailAction'

const ProductError = ({productId}) => {
    const dispatch = useDispatch()
    const refresh = () => {
        dispatch(fetchProductDetail(productId))
    }
    return (
        <div className="flex gap-2 flex-col items-center py-6 px-4">
            <div className="text-red-600">
                Error loading product detail. Try again later.
            </div>
            <PrimaryTextButton onClick={refresh}>
                Refresh
            </PrimaryTextButton>
        </div>
    )
}

export default ProductError
