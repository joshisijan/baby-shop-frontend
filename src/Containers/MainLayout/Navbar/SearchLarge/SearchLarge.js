import { useDispatch, useSelector } from 'react-redux'
import { setSearchQuery, resetSearchQuery, setFilter } from '../../../../features/search/searchSlice';
import { XIcon, AdjustmentsIcon } from '@heroicons/react/solid';
import { Menu } from '@headlessui/react';
import searchFilterType from '../../../../constants/searchFilterType';
import FadeTransition from '../../../../Components/Transition/FadeTransition';

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

    // to know if seraching
    const isSearching = searchState.search !== '' || searchState.ordering !== '';

    return (
        <div className="hidden md:block flex-1 relative">
            <input value={searchState.search} onChange={(e) => handleQueryChange(e.target.value)} className="w-full" type="text" placeholder="Search" />
            <Menu>
                {({ open }) => (
                    <>
                        <Menu.Button className={`bg-primary text-gray-600 p-2 absolute ${isSearching ? 'right-16 -mx-5' : '-mx-3.5 right-5'} top-1/2 transform -translate-y-1/2 hover:bg-primary-light focus:outline-none focus:ring focus:ring-primary-varient`}>
                            <AdjustmentsIcon className="w-5 h-5" />
                        </Menu.Button>
                        <FadeTransition show={open && navbarShown}>
                            <Menu.Items static className="rounded-2xl shadow-lg z-10 divide-y divide-gray-400 absolute right-0 top-full bg-primary-varient flex flex-col items-end">
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
                        </FadeTransition>
                    </>
                )}
            </Menu>
            <button onClick={handleReset} className={`${isSearching ? 'block' : 'hidden'} bg-primary text-gray-600 p-2 absolute right-1 top-1/2 transform -translate-y-1/2 hover:bg-primary-light focus:outline-none focus:ring focus:ring-primary-varient`}>
                <XIcon className="w-5 h-5" />
            </button>
        </div>
    )
}

export default SearchLarge
