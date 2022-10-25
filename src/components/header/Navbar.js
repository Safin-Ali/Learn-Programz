import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa'
import {MdDarkMode} from 'react-icons/md'

const Navbar = () => {
    return (
        <header className='bg-green-500'>
            <nav className='flex justify-between container mx-auto p-5'>
                <div className='flex justify-center items-center'>
                    <h1>Brand Text</h1>
                    <img src="" alt="Brand Logo" />
                </div>
                <ul className='flex justify-center items-center'>
                    <li className='mx-3'>
                        <NavLink to="/learn">Learn</NavLink>
                    </li>
                    <li className='mx-3'>
                        <NavLink to="/">FAQ</NavLink>
                    </li>
                    <li className='mx-3'>
                        <NavLink to="/">Blog</NavLink>
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