import React from 'react'
import { useSelector } from 'react-redux'
import SearchItem from './SearchItem/SearchItem'

const SearchList = () => {
    const searchState = useSelector(state => state.search)
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
                            searchState.data.results.map((product) => {
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
        </div>
    )
}

export default SearchList
