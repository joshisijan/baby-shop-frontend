import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PrimaryTextButton from '../../../Components/Button/PrimaryTextButton'
import EndOfTag from '../../../Components/EndOfTag/EndOfTag'
import { fetchNextCategorProduct } from '../../../features/categoryProduct/categoryProductAction'
import Price from './Price/Price'

const CategoryProductMain = () => {
    const dispatch = useDispatch()
    const categoryProductState = useSelector(state => state.categoryProduct)
    const data = categoryProductState.data.results

    const handleNext = () => {
        dispatch(fetchNextCategorProduct(categoryProductState.data.next));
    }

    return (
        <div>
            {
                data.length === 0 ?
                    <div className="p-4 my-10 rounded-lg border border-red-600 bg-red-50 font-medium text-red-600">
                        No product for this category
                    </div>
                    :
                    <div>
                        <div className="mt-4 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {
                                data.map((product) => {
                                    return (
                                        <Link key={product.id} to={`/product/${product.id}`} className="space-y-2 flex flex-col items-center">
                                            <div className="aspect-w-1 aspect-h-1 w-full h-full">
                                                <img className="object-cover" src={product.thumbnail} alt={product.name} />
                                            </div>
                                            <div className="font-medium">
                                                {product.name}
                                            </div>
                                            <div className="text-sm font-medium">
                                                <Price price={product.price} discount={product.discount_percentage} />
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        {
                            categoryProductState.data.next !== null ?
                                <div className="flex justify-center pt-8 pb-6">
                                    <PrimaryTextButton isLoading={categoryProductState.isLoadingNext} onClick={handleNext}>
                                        Load More
                                    </PrimaryTextButton>                                    
                                </div>
                                :
                                <EndOfTag />                                
                        }
                    </div>
            }
        </div>
    )
}

export default CategoryProductMain
