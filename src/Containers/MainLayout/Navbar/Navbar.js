import React, { useEffect, useState } from 'react'
import {
    MenuIcon,
    SearchIcon,
    UserIcon,
    ShoppingCartIcon,
    HomeIcon,
    XIcon,
} from '@heroicons/react/outline'
import MenuLink from '../Navbar/MenuLink/MenuLink'
import IconButton from './IconButton/IconButton';
import { Link } from 'react-router-dom';


const categoriesList = [
    'Clothings',
    'Footwear',
    'Accessories',
    'Strollers',
]
const Navbar = () => {

    const [navbarShown, setNavbarShown] = useState(true);
    const [menuShown, setMenuShown] = useState(false);

    useEffect(() => {
        let oldScrollY = 0;
        const handleScroll = () => {
            if (window.scrollY > 100) {
                const tempScrollY = window.scrollY;
                if (tempScrollY > oldScrollY) setNavbarShown(false);
                else setNavbarShown(true);
                oldScrollY = window.scrollY;
            } else {
                setNavbarShown(true);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    useEffect(() => {
        if (menuShown) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [menuShown]);
    return (
        <div className={`z-10 bg-white shadow-sm transition transform fixed ${navbarShown ? 'translate-y-0' : '-translate-y-full'} inset-x-0 top-0 flex flex-col items-center`}>
            <div className="p-2 lg:px-6 lg:py-2 space-x-2 flex items-center w-full max-w-6xl">
                <IconButton className="md:hidden" onClick={() => setMenuShown(true)}>
                    <MenuIcon className="w-5 h-5" />
                </IconButton>
                <h1 className="font-bold text-2xl">LogoOfApp</h1>
                <div className="md:hidden flex-1"></div>
                <div className="hidden md:block flex-1 relative">
                    <input className="w-full" type="text" placeholder="Search" />
                    <button className="bg-primary text-gray-600 p-2 absolute right-1 top-1/2 transform -translate-y-1/2 hover:bg-primary-light focus:outline-none focus:ring focus:ring-primary-varient">
                        <SearchIcon className="w-5 h-5" />
                    </button>
                </div>
                <Link to="/">
                    <IconButton label="Home">
                        <HomeIcon className="w-5 h-5" />
                    </IconButton>
                </Link>
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
                <button className="bg-primary text-gray-600 p-2 absolute right-7 top-1/2 transform -translate-y-1/2 hover:bg-primary-light focus:outline-none focus:ring focus:ring-primary-varient">
                    <SearchIcon className="w-5 h-5" />
                </button>
            </div>
            {/* category list big screen */}
            <div className="hidden md:flex flex-wrap justify-center px-6 pb-4 gap-4">
                <MenuLink className="flex" onClick={() => setMenuShown(true)}>
                    <MenuIcon className="w-5 h-5" /> <span>All Categories</span>
                </MenuLink>
                {
                    categoriesList.map(category => {
                        return (
                            <MenuLink key={category}>
                                {category}
                            </MenuLink>
                        )
                    })
                }
            </div>
            {/* fullscreen overlay */}
            <div onClick={() => setMenuShown(false)} className={`${menuShown ? 'fixed top-0 left-0 w-screen h-screen bg-black opacity-50' : 'hidden'}`}></div>
            {/* Category Menu */}
            <div className={`bg-secondary fixed top-0 left-0 h-screen w-full max-w-xs transition duration-500 transform ${menuShown ? 'translate-x-0' : '-translate-x-full'}`}>
                <IconButton label="Close" onClick={() => setMenuShown(false)}>
                    <XIcon className="w-5 h-5" />
                </IconButton>
            </div>
        </div>
    )
}

export default Navbar
