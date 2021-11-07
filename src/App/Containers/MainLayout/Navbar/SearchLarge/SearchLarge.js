import { useDispatch, useSelector } from 'react-redux'
import { setSearchQuery, resetSearchQuery, setFilter, resetFilter } from '../../../../features/search/searchSlice';
import { XIcon, AdjustmentsIcon } from '@heroicons/react/solid';
import { Menu } from '@headlessui/react';
import searchFilterType from '../../../../constants/searchFilterType';

const SearchLarge = ({ navbarShown }) => {
    const searchState = useSelector(state => state.search);
    const dispatch = useDispatch()

    const handleQueryChange = (value) => {
        dispatch(setSearchQuery(value));
    }

    const handleReset = () => {
        dispatch(resetSearchQuery());
    }

    const handleFilter = (filterValue) => {
        dispatch(setFilter(filterValue));
    }

    const handleResetFilter = () => {
        dispatch(resetFilter());
    }

    // to know if seraching
    const isSearching = searchState.search !== '' || searchState.ordering !== '';

    return (
        <div className="hidden md:block flex-1 relative">
            <input value={searchState.search} onChange={(e) => handleQueryChange(e.target.value)} className="w-full" type="text" placeholder="Search" />
            <Menu>
                {({ open }) => (
                    <>
                        <Menu.Button className={`rounded-lg bg-primary text-gray-600 p-2 absolute ${isSearching ? 'right-16 -mx-5' : '-mx-3 right-4'} top-1/2 transform -translate-y-1/2 hover:bg-primary-light focus:outline-none focus:ring focus:ring-primary-varient`}>
                            <AdjustmentsIcon className="w-5 h-5" />
                        </Menu.Button>
                        {
                            open && navbarShown ?
                                <Menu.Items static className="mt-1.5 shadow rounded-lg z-10 absolute right-0 top-full flex flex-col gap-2 items-end border p-2 bg-white">
                                    {
                                        searchState.ordering !== '' ?
                                            <Menu.Item onClick={handleResetFilter} as="button" className="flex flex-wrap items-center justify-center bg-red-50 border border-red-600 text-red-600 rounded-lg px-4 py-1.5 w-full text-right hover:bg-primary-light focus:outline-none focus:ring focus:ring-primary-varient">
                                                <XIcon className="w-5 h-5" /> Clear filter
                                            </Menu.Item>
                                            : null
                                    }
                                    {
                                        Object.values(searchFilterType).map((value, index) => {
                                            return (
                                                <Menu.Item key={index} as="button" onClick={() => handleFilter(value[0])} className={`${searchState.ordering === value[0] ? 'bg-primary-light' : 'bg-primary-varient'} rounded-lg py-2 px-4 w-full text-right hover:bg-primary-light focus:outline-none focus:ring focus:ring-primary-varient`}>
                                                    {value[1]}
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </Menu.Items>
                                : null
                        }
                    </>
                )}
            </Menu>
            <button onClick={handleReset} className={`${isSearching ? 'block' : 'hidden'} rounded-lg bg-primary text-gray-600 p-2 absolute right-1 top-1/2 transform -translate-y-1/2 hover:bg-primary-light focus:outline-none focus:ring focus:ring-primary-varient`}>
                <XIcon className="w-5 h-5" />
            </button>
        </div>
    )
}

export default SearchLarge
