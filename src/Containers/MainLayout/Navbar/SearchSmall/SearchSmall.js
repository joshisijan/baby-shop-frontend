import { Menu } from '@headlessui/react';
import { AdjustmentsIcon, XIcon } from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux'
import searchFilterType from '../../../../constants/searchFilterType';
import { setSearchQuery, resetSearchQuery, setFilter, resetFilter } from '../../../../features/search/searchSlice';

const SearchSmall = ({ navbarShown }) => {
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
        <div className="relative px-4 py-2 w-full md:hidden">
            <input value={searchState.search} onChange={(e) => handleQueryChange(e.target.value)} className="w-full pr-24" type="text" placeholder="Search" />
            <Menu>
                {({ open }) => (
                    <>
                        <Menu.Button className={`bg-primary text-gray-600 p-2 absolute ${isSearching ? 'right-16' : 'right-5'} top-1/2 transform -translate-y-1/2 hover:bg-primary-light focus:outline-none focus:ring focus:ring-primary-varient`}>
                            <AdjustmentsIcon className="w-5 h-5" />
                        </Menu.Button>
                        {
                            open && navbarShown ?
                                <Menu.Items static className="rounded-2xl shadow-lg z-10 divide-y divide-gray-700 border-t absolute right-4 top-full bg-primary-varient flex flex-col items-end">
                                    {
                                        searchState.ordering !== '' ? 
                                        <Menu.Item onClick={handleResetFilter} as="button" className="flex flex-wrap items-center justify-center bg-primary-light rounded-2xl py-2 px-4 w-full text-right hover:bg-primary-light focus:outline-none focus:ring focus:ring-primary-varient">
                                            <XIcon className="w-5 h-5" /> Clear filter
                                        </Menu.Item>
                                        : null
                                    }
                                    {
                                        Object.values(searchFilterType).map((value, index) => {
                                            return (
                                                <Menu.Item key={index} as="button" onClick={() => handleFilter(value[0])} className={`${searchState.ordering === value[0] ? 'bg-primary-light' : ''} rounded-2xl py-2 px-4 w-full text-right hover:bg-primary-light focus:outline-none focus:ring focus:ring-primary-varient`}>
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
            <button onClick={handleReset} className={`${isSearching ? 'block' : 'hidden'} bg-primary text-gray-600 p-2 absolute right-5 top-1/2 transform -translate-y-1/2 hover:bg-primary-light focus:outline-none focus:ring focus:ring-primary-varient`}>
                <XIcon className="w-5 h-5" />
            </button>
        </div>
    )
}

export default SearchSmall
