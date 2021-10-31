import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PrimaryTextButton from '../../../../../Components/Button/PrimaryTextButton'
import { getNextData } from '../../../../../features/search/searchAction'
import SearchItem from './SearchItem/SearchItem'

const SearchList = () => {
    const searchState = useSelector(state => state.search)
    const dispatch = useDispatch()

    const handleNext = (next) => {
        dispatch(getNextData(next))
    }

    return (
        <div>
            {
                searchState.data.results.length === 0 ?
                    <div className="py-10 text-center font-medium">
                        No product found.
                    </div>
                    :
                    <div className="py-4 grid gap-4 grid-cols-2 md:grid-cols-4">
                        {
                            searchState.data.results.map((product, index) => {
                                return (
                                    <SearchItem
                                        key={product.id}
                                        product={product}
                                    />
                                )
                            })
                        }
                    </div>
            }
            {
                searchState.data.next !== null ? 
                <div className="text-center">   
                    <PrimaryTextButton onClick={() => handleNext(searchState.data.next)} isLoading={searchState.nextIsLoading}>
                        Load more
                    </PrimaryTextButton>
                </div>
                :
                null
            }
            <div className="h-20"></div>
        </div>
    )
}

export default SearchList
