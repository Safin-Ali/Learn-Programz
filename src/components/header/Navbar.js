import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa'
import {MdDarkMode} from 'react-icons/md';
import {BiCodeAlt} from 'react-icons/bi';
import MobileNav from './MobileNav';

const Navbar = () => {
    return (
        <header className='bg-[#f0f4f5] shadow-md'>
            <nav className='flex justify-between container mx-auto p-5'>
                <div className='flex justify-center items-center'>
                    <Link to={'/home'} className='text-3xl text-slate-800'>Learn<BiCodeAlt className='inline text-pinkBtn text-4xl'></BiCodeAlt>Programz</Link>
                </div>
                <ul className='hidden lg:flex text-slate-900 font-semibold justify-center items-center'>
                    <li className='mx-3'>
                        <NavLink to="/learn" className='hover:text-pinkBtn duration-100'>Learn</NavLink>
                    </li>
                    <li className='mx-3'>
                        <NavLink to="/" className='hover:text-pinkBtn duration-100'>FAQ</NavLink>
                    </li>
                    <li className='mx-3'>
                        <NavLink to="/" className='hover:text-pinkBtn duration-100'>Blog</NavLink>
                    </li>
                    <li className='mx-3'>
                        <MdDarkMode className='text-3xl cursor-pointer'></MdDarkMode>
                    </li>
                    <li className='mx-3'>
                        <p><FaUserCircle className='text-3xl'></FaUserCircle></p>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;