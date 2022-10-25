import React from 'react';
import { Link,NavLink } from 'react-router-dom';

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
                        <NavLink to="/">Courses</NavLink>
                    </li>
                    <li className='mx-3'>
                        <NavLink to="/">FAQ</NavLink>
                    </li>
                    <li className='mx-3'>
                        <NavLink to="/">Blog</NavLink>
                    </li>
                    <li className='mx-3'>
                        <NavLink to="/">dark Button</NavLink>
                    </li>
                    <li className='mx-3'>
                        <NavLink to="/">User profile</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;