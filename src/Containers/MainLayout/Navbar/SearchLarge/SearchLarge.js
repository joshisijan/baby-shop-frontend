import { useDispatch, useSelector } from 'react-redux'
import { setSearchQuery, resetSearchQuery } from '../../../../features/search/searchSlice';
import { XIcon } from '@heroicons/react/solid';

const SearchLarge = () => {
    const searchState = useSelector(state => state.search);
    const dispatch = useDispatch()

    const handleQueryChange = (value) => {
        dispatch(setSearchQuery(value));
    }

    const handleReset = () => {
        dispatch(resetSearchQuery());
    }

    // to know if seraching
    const isSearching = searchState.search !== '' || searchState.ordering !== '';
    
    return (
        <div className="hidden md:block flex-1 relative">
            <input value={searchState.search} onChange={(e) => handleQueryChange(e.target.value)} className="w-full" type="text" placeholder="Search" />
            <button onClick={handleReset} className={`${isSearching ? 'block' : 'hidden'} bg-primary text-gray-600 p-2 absolute right-1 top-1/2 transform -translate-y-1/2 hover:bg-primary-light focus:outline-none focus:ring focus:ring-primary-varient`}>
                <XIcon className="w-5 h-5" />
            </button>
        </div>
    )
}

export default SearchLarge
