import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router'
import { fetchCategoryProduct } from '../../features/categoryProduct/categoryProductAction'
import CategoryProductError from './CategoryProductError/CategoryProductError'
import CategoryProductLoading from './CategoryProductLoading/CategoryProductLoading'
import CategoryProductMain from './CategoryProductMain/CategoryProductMain'

const CategoryProductPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const locationState = location.state // to get category name and description through Link
    const categoryProductState = useSelector(state => state.categoryProduct)

    useEffect(() => {
        dispatch(fetchCategoryProduct(id))
    }, [dispatch, id])
    
    return (
        <div className="mt-4 md:-mt-1 p-2 md:p-6 grid justify-items-center">
            {
                locationState === undefined ?
                    <Helmet>
                        <title>Products for category</title>
                    </Helmet>
                    :
                    <Helmet>
                        <title>Products for {locationState.name}</title>
                        <meta
                            name="description"
                            content={locationState.description.substring(0, 100)}
                        />
                        <meta
                            name="keywords"
                            content={locationState.name}
                        />
                    </Helmet>
            }
            <div className="px-4 w-full max-w-6xl">
                <h1 className="mb-4 text-xl font-bold">
                    {
                        locationState === undefined ?
                        'Product List'
                        :
                        `Products for ${locationState.name}`
                    }   
                </h1>
                {
                    categoryProductState.isLoading || categoryProductState.data === null ?
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
