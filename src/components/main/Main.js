import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MobileNav from '../header/MobileNav';
import Navbar from '../header/Navbar';
import {BsCaretRightFill} from 'react-icons/bs';

const Main = () => {
    const [translateX,setTranslateX] = useState(false);
    const [openNavBtn,setOpenNavBoo] = useState(false);
    const [currScrlNum,setCurrSclNum] = useState();


    function handleMobileNav () {
        setTranslateX(!translateX);
        setOpenNavBoo(false)
        window.scrollTo({top: currScrlNum, left: 0, behavior: 'smooth'});
    };
    
    return (
        <section className='relative'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className='lg:hidden'>

            {/* Mobile Navbar */}

            <BsCaretRightFill
                onClick={()=>{
                setOpenNavBoo(true);
                setTranslateX(!translateX);
                setCurrSclNum(window.scrollY)
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }} 
                className={`cursor-pointer text-xl fixed top-1/2 ${openNavBtn ? 'hidden' : 'block'} bg-[#31313154] rounded-r-2xl mt-0`}>
            </BsCaretRightFill>

            <div>
                <div className={`mx-auto absolute top-0 ${!translateX ? '-translate-x-full' : 'translate-x-0'}`}>
                    <MobileNav bool={translateX} handleMNav={handleMobileNav}></MobileNav>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Main;