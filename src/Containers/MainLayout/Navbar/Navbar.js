import React, { useEffect, useState } from 'react'
import {
    MenuIcon,
    UserIcon,
    ShoppingCartIcon,
    HomeIcon,
    CheckCircleIcon,
    XIcon,
    HeartIcon,
} from '@heroicons/react/outline'
import MenuLink from '../Navbar/MenuLink/MenuLink'
import IconButton from './IconButton/IconButton';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList/CategoryList';
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import Breadcrumb from './Breadcrumb/Breadcrumb';
import { useSelector } from 'react-redux'
import SecondaryTextButton from '../../../Components/Button/SecondaryTextButton';
import SearchSmall from './SearchSmall/SearchSmall';
import SearchLarge from './SearchLarge/SearchLarge';
import SearchResult from './SearchResult/SearchResult';

const Navbar = () => {
    const breadcrumbs = useBreadcrumbs();
    const [navbarShown, setNavbarShown] = useState(true);
    const [menuShown, setMenuShown] = useState(false);

    // category list state
    const categoryListState = useSelector(state => state.categoryList);

    // cart state
    const cartState = useSelector(state => state.cart)

    // search state 
    const searchState = useSelector(state => state.search)

    // hide navbar on bottom scroll and show in top scroll
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

    //  for blocking scroll on category menu 
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

    // to know if seraching
    const isSearching = searchState.search !== '' || searchState.ordering !== '';

    // for blocking scroll on search
    useEffect(() => {
        if (isSearching) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [isSearching]);


    return (
        <div className={`${isSearching ? 'h-screen' : ''} z-20 bg-white shadow-sm transition transform fixed ${navbarShown ? 'translate-y-0' : '-translate-y-full'} inset-x-0 top-0 flex flex-col items-center`}>
            <div className="p-2 lg:px-6 lg:py-2 space-x-2 flex flex-wrap justify-end items-center w-full max-w-6xl">
                <IconButton className="md:hidden" onClick={() => setMenuShown(true)}>
                    <MenuIcon className="w-5 h-5" />
                </IconButton>
                <h1 className="hidden md:inline font-bold text-2xl">LogoOfApp</h1>
                <div className="md:hidden flex-1"></div>
                <SearchLarge navbarShown={navbarShown} />
                <Link to="/">
                    <IconButton label="Home">
                        <HomeIcon className="w-5 h-5" />
                    </IconButton>
                </Link>
                <Link to='/account'>
                    <IconButton label="Account">
                        <UserIcon className="w-5 h-5" />
                    </IconButton>
                </Link>
                <Link to="/order">
                    <IconButton label="My Orders">
                        <CheckCircleIcon className="w-5 h-5" />
                    </IconButton>
                </Link>
                <Link to="/wishlist">
                    <IconButton label="Wishlist">
                        <HeartIcon className="w-5 h-5" />
                    </IconButton>
                </Link>
                <Link to="/cart">
                    <IconButton label="Cart" counter={cartState.data === null ? 0 : cartState.data.cart_items.length}>
                        <ShoppingCartIcon className="w-5 h-5" />
                    </IconButton>
                </Link>
            </div>
            {/* search bar for smaller devices */}
            <SearchSmall navbarShown={navbarShown} />
            {/* category list big screen */}
            <div className="hidden md:flex flex-wrap justify-center px-6 gap-4">
                <MenuLink className="flex" onClick={() => setMenuShown(true)}>
                    <MenuIcon className="w-5 h-5" /> <span>All Categories</span>
                </MenuLink>
                {
                    categoryListState.data.results.slice(0,5).map(category => {
                        return (
                            <Link 
                                key={category.id} 
                                to={{
                                    pathname: `/category/${category.id}`,
                                    state: {
                                        name: category.name,
                                        description: category.description,
                                    }
                                }}
                            >
                                <MenuLink>
                                    {category.name}
                                </MenuLink>
                            </Link>
                        )
                    })
                }
            </div>

            {/* breadcrumbs */}
            <Breadcrumb breadcrumbs={breadcrumbs} />

            {/* fullscreen overlay */}
            <div onClick={() => setMenuShown(false)} className={`${menuShown ? 'fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-30' : 'hidden'}`}></div>
            {/* Category Menu */}
            <div className={`z-30 overflow-y-auto px-6 py-4 bg-white fixed top-0 left-0 h-screen w-full max-w-xs transition duration-500 transform ${menuShown ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-end">
                    <IconButton onClick={() => setMenuShown(false)}>
                        <XIcon className="w-5 h-5" />
                    </IconButton>
                </div>
                <div className="font-bold">Categories</div>
                <CategoryList />
                <div className="flex justify-center">
                    <Link to="/category/">
                        <SecondaryTextButton>View all categories</SecondaryTextButton>
                    </Link>
                </div>
                {/* for gap at bottom of category menu */}
                <div className="h-40"></div>
            </div>
            {/* search result */}
            {
                isSearching ?
                    <SearchResult />
                    :
                    null
            }
        </div>
    )
}

export default Navbar
