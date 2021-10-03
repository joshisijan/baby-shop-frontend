import React, { useState } from 'react'
import {
    XIcon,
    MenuIcon,
    SearchIcon,
    UserIcon,
    ShoppingCartIcon,
    InformationCircleIcon,
} from '@heroicons/react/outline'
import TopTransformTransition from '../../../Components/Transition/TopTransformTransition';
import MenuLink from '../Navbar/MenuLink/MenuLink'
import IconButton from './IconButton/IconButton';

const categoriesList = [
    'Clothings',
    'Footwear',
    'Accessories',
    'Strollers',
    'Baby Gear',
    'Toys',
    'Clothings',
    'Footwear',
    'Accessories',
    'Strollers',
    'Baby Gear',
    'Toys',
]

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="bg-white shadow-sm fixed inset-x-0 top-0 flex flex-col items-center">
            <div className="px-6 py-2 space-x-2 flex items-center w-full max-w-6xl">
                <IconButton className="md:hidden">
                    <MenuIcon className="w-5 h-5" />
                </IconButton>
                <h1 className="font-bold text-2xl">LogoOfApp</h1>
                <div className="md:hidden flex-1"></div>
                <div className="hidden md:block flex-1 relative">
                    <input className="w-full" type="text" placeholder="Search" />
                    <button className="bg-purple-600 text-gray-50 p-2 absolute right-1 top-1/2 transform -translate-y-1/2 hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-300">
                        <SearchIcon className="w-5 h-5" />
                    </button>
                </div>
                <IconButton label="Help">
                    <InformationCircleIcon className="w-5 h-5" />
                </IconButton>
                <IconButton label="Account">
                    <UserIcon className="w-5 h-5" />
                </IconButton>
                <IconButton label="Cart" counter={2}>
                    <ShoppingCartIcon className="w-5 h-5" />
                </IconButton>
            </div>
            {/* search bar for smaller devices */}
            <div className="relative py-2 px-6 w-full md:hidden">
                <input className="w-full pr-12" type="text" placeholder="Search" />
                <button className="bg-purple-600 text-gray-50 p-2 absolute right-7 top-1/2 transform -translate-y-1/2 hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-300">
                    <SearchIcon className="w-5 h-5" />
                </button>
            </div>
            {/* category list big screen */}
            <div className="hidden md:flex flex-wrap justify-center px-6 pb-4 gap-4">
                {
                    categoriesList.map(category => {
                        return (
                            <MenuLink>
                                {category}
                            </MenuLink>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navbar
