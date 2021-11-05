import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PrimaryTextButton from '../../../Components/Button/PrimaryTextButton'
import EndOfTag from '../../../Components/EndOfTag/EndOfTag'
import { getNextCategoryList } from '../../../features/categoryList/categoryListAction'
import CategoryListItem from './CategoryListItem/CategoryListItem'

const CategoryListMain = () => {
    const dispatch = useDispatch()
    const categoryListState = useSelector(state => state.categoryList)
    const data = categoryListState.data.results

    const handleNext = () => {
        dispatch(getNextCategoryList(categoryListState.data.next))
    }

    return (
        <div>
            {
                data.length === 0 ?
                    <div className="p-4 my-10 rounded-lg border border-red-600 bg-red-50 font-medium text-red-600">
                        No category found
                    </div>
                    :
                    <div>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {
                                data.map((category) => {
                                    return <CategoryListItem
                                        key={category.id}
                                        name={category.name}
                                        image={category.image}
                                        id={category.id}
                                    />
                                })
                            }
                        </div>
                        {
                            categoryListState.data.next !== null ?
                                <div className="flex justify-center pt-8 pb-6">
                                    <PrimaryTextButton isLoading={categoryListState.isLoadingNext} onClick={handleNext}>
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

export default CategoryListMain
