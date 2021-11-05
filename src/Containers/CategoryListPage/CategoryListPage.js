import React from 'react'
import { useSelector } from 'react-redux'
import CategoryListError from '../MainLayout/Navbar/CategoryList/CategoryListError/CategoryListError'
import CategoryListLoading from './CategoryListLoading/CategoryListLoading'
import CategoryListMain from './CategoryListMain/CategoryListMain'

const CategoryListPage = () => {
    const categoryListState = useSelector(state => state.categoryList)
    return (
        <div className="mt-4 md:-mt-1 p-2 md:p-6 grid justify-items-center">
            <div className="px-4 w-full max-w-6xl">
                <h1 className="mb-4 text-xl font-bold">Categories</h1>
                {
                    categoryListState.isLoading ? 
                    <CategoryListLoading />
                    :
                    categoryListState.error ? 
                    <CategoryListError />
                    :
                    <CategoryListMain />
                }
            </div>
        </div>
    )
}

export default CategoryListPage
