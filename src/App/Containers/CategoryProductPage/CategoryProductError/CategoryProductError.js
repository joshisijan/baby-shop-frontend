import React from 'react'
import { useDispatch } from 'react-redux'
import PrimaryTextButton from '../../../Components/Button/PrimaryTextButton'
import { fetchCategoryProduct } from '../../../features/categoryProduct/categoryProductAction'

const CategoryProductError = () => {
    const dispatch = useDispatch()
    const refresh = () => {
        dispatch(fetchCategoryProduct())
    }
    return (
        <div className="flex gap-2 flex-col items-center py-6 px-4">
            <div className="text-red-600">
                Error products for category. Try again later.
            </div>
            <PrimaryTextButton onClick={refresh}>
                Refresh
            </PrimaryTextButton>            
        </div>
    )
}

export default CategoryProductError
