import React from 'react';
import Logo from '../../assets/logo.png';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './darkmode';
import { FaCaretDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Brand",
        link: "/#",
        dropdown: true,
        dropdownLinks: [
            { id: 1, name: "FireFox", link: "./#firefox" },
            { id: 2, name: "Hero", link: "./#hero" },
            { id: 3, name: "Reliegh", link: "./#reliegh" },
            { id: 4, name: "Atlas", link: "./#Atlas" },
            { id: 5, name: "Suncross", link: "./#suncross" }
        ]
    },
    {
        id: 3,
        name: "Contact",
        link: "/contact",
    },
    {
        id: 4,
        name: "About Us",
        link: "/about",
    },
];

const navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        {/* Upper Navbar */}
        <div className='bg-primary/40 py-2'>
            <div className='container flex justify-between items-center'>
                <div>
                    <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                        <img src={Logo} alt="Logo" 
                        className="w-10 h-10" />
                        Himanshu Bicycles Hub
                    </a>
                </div>
                {/* Search bar and other buttons */}
                <div className='flex justify-between items-center gap-4'>
                    <div className="relative group hidden sm:block">
                        <input 
                        type="text" 
                        placeholder="Search" 
                        className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-400 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                        />
                        <IoMdSearch 
                        className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
                        />
                    </div>
                    {/* Cart button */}
                    <Link 
                    to="/cart" 
                    className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                        <span className='group-hover:block hidden transition-all duration-200'>Cart</span>
                        <FaCartShopping 
                        className='text-xl text-white drop-shadow-sm cursor-pointer'
                        />
                    </Link>
                    
                    {/* Dark mode switch */}
                    <div className='w-4'>
                        <DarkMode className='hover:'/>
                    </div>

                    {/* Login button */}
                    <Link 
                    to="/login" // Navigate to the Login page
                    className='text-primary font-semibold py-2 px-4 rounded-lg hover:bg-primary/20 transition duration-300'>
                        Login
                    </Link>
                </div>
            </div>
        </div>
        
        {/* Lower Navbar */}
        <div className='flex justify-center'>
            <ul className='sm:flex hidden items-center gap-4'>
                {Menu.map((data) => (
                    data.dropdown ? (
                        <li key={data.id} className='group relative cursor-pointer'>
                            <a href="#" className='flex items-center gap-[2px] py-2'>
                                {data.name}
                                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
                            </a>
                            <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md dark:bg-gray-800 dark:text-white'>
                                <ul>
                                    {data.dropdownLinks.map((dropdownItem) => (
                                        <li key={dropdownItem.id}>
                                            <a href={dropdownItem.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                                                {dropdownItem.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ) : (
                        <li key={data.id}>
                            <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>
                                {data.name}
                            </a>
                        </li>
                    )
                ))}
            </ul>
        </div>
    </div>
  )
}

export default navbar;
