'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Menu and Close icons
import NavItems from '../NavItem/NavItem';

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userDetails, setUserDetails] = useState(null)
    useEffect(() => {
        const data = localStorage.getItem('userData');
        if (data) {
            setUserDetails(JSON.parse(data));
        }
    }, []);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="md:hidden relative">
            {/* Menu Button */}
            <button
                onClick={toggleMenu}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white dark:bg-primary-50"
            >
                {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>

            {isOpen && (
                <div className="absolute z-50 top-12 px-5 py-5 right-0 w-48 bg-white dark:bg-black text-black dark:text-white border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg">
                    <NavItems></NavItems>
                    <li
                        className='flex-left pt-5 p-medium-16 whitespace-nowrap'
                    >
                        <Link href='/login'>Login</Link>
                    </li>
                </div>
            )}
        </div>
    );
};

export default MobileNav;
