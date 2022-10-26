import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MobileNav from '../header/MobileNav';
import Navbar from '../header/Navbar';
import {BsCaretRightFill} from 'react-icons/bs';

const Main = () => {
    const [translateX,setTranslateX] = useState(false);
    const [openNavBtn,setOpenNavBoo] = useState(false)
    function handleMobileNav () {
        setTranslateX(!translateX);
        setOpenNavBoo(false)
    }
    return (
        <section className='relative'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className='absolute top-0'>
            {/* Mobile Navbar */}
            <p><BsCaretRightFill onClick={()=>{
                setOpenNavBoo(true)
                setTranslateX(!translateX)
                }} className={`cursor-pointer text-xl fixed top-1/2 ${openNavBtn ? 'hidden' : 'block'} bg-[#31313154] rounded-r-2xl mt-0`}></BsCaretRightFill></p>
            <div className=''>
                <div className={`mx-auto translate-x-[${!translateX ? -999 : 0}%]`}>
                    <MobileNav bool={translateX} handleMNav={handleMobileNav}></MobileNav>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Main;