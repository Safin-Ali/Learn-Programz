import React, { useContext, } from 'react';
import { Link, useNavigate, NavLink, } from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa'
import {MdDarkMode} from 'react-icons/md';
import {BiCodeAlt} from 'react-icons/bi';
import { AuthData } from '../Firebase/AuthContext';

const Navbar = () => {

    const {userData,logOut,} = useContext(AuthData);

    const navigate = useNavigate();

    function handleSignOut () {
        logOut()
        .then(()=>{
            localStorage.removeItem('LP_Logged')
            navigate('/login')
        })
    }
    
    return (
        <header className='bg-[#f0f4f5] shadow-md'>
            <nav className='flex justify-between container mx-auto p-5'>
                <div className='flex justify-center items-center'>
                    <Link to={'/home'} className='text-3xl text-slate-800'>Learn<BiCodeAlt className='inline text-pinkBtn text-4xl'></BiCodeAlt>Programz</Link>
                </div>
                <div className='flex items-center'>
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
                </ul>
                    <div className='mx-3'>
                        <MdDarkMode className='text-3xl cursor-pointer'></MdDarkMode>
                    </div>
                    <div className='mx-3'>
                            {userData? <div className='w-10 cursor-pointer' onClick={handleSignOut}><img className='rounded-full' src={userData.photoURL} alt="User Avatar" /></div>
                            : <Link className='text-pinkBtn' to={'/login'} >
                            <FaUserCircle className='text-3xl'></FaUserCircle>
                            </Link>
                            }
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;