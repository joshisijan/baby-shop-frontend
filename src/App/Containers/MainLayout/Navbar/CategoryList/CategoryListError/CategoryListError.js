import React from 'react'
import { useDispatch } from 'react-redux'
import PrimaryTextButton from '../../../../../Components/Button/PrimaryTextButton'
import { fetchCategoryList } from '../../../../../features/categoryList/categoryListAction'

const CategoryListError = () => {
    const dispatch = useDispatch()
    const refresh = () => {
        dispatch(fetchCategoryList());
    }
    return (
        <div className="flex gap-2 flex-col items-center py-6 px-4">
            <div className="text-red-600">
                An error occurred.Try again later.
            </div>
            <PrimaryTextButton onClick={refresh}>
                Refresh
            </PrimaryTextButton>
        </div>
    )
}

export default CategoryListError
