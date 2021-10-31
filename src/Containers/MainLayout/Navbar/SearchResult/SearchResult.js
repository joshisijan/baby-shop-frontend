import { XIcon } from '@heroicons/react/outline'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PrimaryTextButton from '../../../../Components/Button/PrimaryTextButton'
import { resetSearchQuery } from '../../../../features/search/searchSlice'
import { search } from '../../../../features/search/searchAction'
import SearchLoading from './SearchLoading/SearchLoading'
import SearchList from './SearchList/SearchList'
import SearchError from './SearchError/SearchError'
import searchFilterType from '../../../../constants/searchFilterType'

const SearchResult = ({ className }) => {
    const dispatch = useDispatch()
    const searchState = useSelector(state => state.search)

    const handleReset = () => {
        dispatch(resetSearchQuery());
    }

    // to know if seraching
    const isSearching = searchState.search !== '' || searchState.ordering !== '';

    // calling search on every change
    useEffect(() => {
        const searchQuery = {
            search: searchState.search,
            ordering: searchState.ordering
        }
        dispatch(search(searchQuery));
    }, [searchState.search, searchState.ordering, dispatch, isSearching]);


    const searchFilterTitleGenerator = (value) => {
        return Object.values(searchFilterType).find(data => data[0] === value)[1]
    } 

    return (
        <div className={`overflow-y-auto p-4 max-w-6xl bg-white border-t h-full w-full ${className}`}>
            <div className="hidden md:flex justify-end">
                <PrimaryTextButton onClick={handleReset} className="text-sm flex gap-2">
                    <XIcon className="w-5 h-5" />
                    Close Search
                </PrimaryTextButton>
            </div>
            <h1 className="font-medium text-center">
                Search result for: &nbsp;
                <span className="text-red-600">
                    {
                        searchState.search !== '' ?
                            searchState.search
                            :
                            'All products'
                    }
                </span>
            </h1>
            {
                searchState.ordering !== '' ?
                    <h1 className="font-medium text-center">
                        Applied filter: &nbsp;
                        <span className="text-red-600">
                            {
                                searchFilterTitleGenerator(searchState.ordering)                               
                            }
                        </span>
                    </h1>
                    : null
            }
            {
                searchState.error ?
                    <SearchError />
                    :
                    searchState.isLoading ?
                        <SearchLoading />
                        :
                        <SearchList />
            }
            <div className="h-20"></div>
        </div>
    )
}

export default SearchResult
