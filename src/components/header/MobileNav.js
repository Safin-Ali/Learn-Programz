import React from 'react';
import {NavLink} from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'

const MobileNav = ({handleMNav}) => {
    return (
        <div className={`w-screen  text-center relative bg-[#000000af]`}>
            <AiOutlineClose onClick={()=>handleMNav()} className='text-4xl cursor-pointer text-white absolute right-0'></AiOutlineClose>
            <ul className=' min-h-screen h-full flex justify-center items-center flex-col'>
                <li className='my-2'><NavLink className={'text-white'} to="/learn">Learn</NavLink></li>
                <li className='my-2'><NavLink className={'text-white'} to="/faq">FAQ</NavLink></li>
                <li className='my-2'><NavLink className={'text-white'} to="/questions/ph/sa">Blog</NavLink></li>
            </ul>
        </div>
    );
};

export default MobileNav;