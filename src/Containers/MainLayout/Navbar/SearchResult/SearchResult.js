import { XIcon } from '@heroicons/react/outline'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PrimaryTextButton from '../../../../Components/Button/PrimaryTextButton'
import { resetSearchQuery } from '../../../../features/search/searchSlice'

const SearchResult = ({ className }) => {
    const dispatch = useDispatch()
    const searchState = useSelector(state => state.search)

    const handleReset = () => {
        dispatch(resetSearchQuery());
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
                Search result for <span className="text-red-600">{searchState.search}</span>:
            </h1>
            <div>
                <h1 className="text-9xl">Hello</h1><br />
                <h1 className="text-9xl">Hello</h1><br />
                <h1 className="text-9xl">Hello</h1><br />
                <h1 className="text-9xl">Hello</h1><br />
                <h1 className="text-9xl">Hello</h1><br />
                <h1 className="text-9xl">Hello</h1><br />
                <h1 className="text-9xl">Hello</h1><br />
                <h1 className="text-9xl">Hello</h1><br />
                <h1 className="text-9xl">Hello</h1><br />
                <h1 className="text-9xl">Hello</h1><br />
                <h1 className="text-9xl">Hello</h1><br />
                <h1 className="text-9xl">Hello</h1><br />
            </div>
            <div className="h-20"></div>
        </div>
    )
}

export default SearchResult
