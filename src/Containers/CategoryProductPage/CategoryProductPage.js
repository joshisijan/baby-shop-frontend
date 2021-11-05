import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchCategoryProduct } from '../../features/categoryProduct/categoryProductAction'
import CategoryProductError from './CategoryProductError/CategoryProductError'
import CategoryProductLoading from './CategoryProductLoading/CategoryProductLoading'
import CategoryProductMain from './CategoryProductMain/CategoryProductMain'

const CategoryProductPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const categoryProductState = useSelector(state => state.categoryProduct)

    useEffect(() => {
        dispatch(fetchCategoryProduct(id))
    }, [dispatch, id])

    return (
        <div className="mt-4 md:-mt-1 p-2 md:p-6 grid justify-items-center">
            <div className="px-4 w-full max-w-6xl">
                <h1 className="mb-4 text-xl font-bold">Product List</h1>
                {
                    categoryProductState.isLoading  || categoryProductState.data === null?
                        <CategoryProductLoading />
                        :
                        categoryProductState.error ?
                            <CategoryProductError />
                            :
                            <CategoryProductMain />
                }
            </div>
        </div>
    )
}

export default CategoryProductPage
