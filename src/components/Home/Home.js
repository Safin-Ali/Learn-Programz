import React from 'react';
import AutoTyping from '../auto-typing-anim/AutoTyping';
import Slider from '../slider/Slider';

const Home = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 items-center my-10'>
            {/* slider */}
            <div className='lg:border-r-4 border-pink-500 shadow-md lg:shadow-none'>
                <Slider></Slider>
            </div>
            {/* Text Change Animation */}
            <div className='flex items-center px-6'>
               <AutoTyping></AutoTyping>
            </div>
        </section>
    );
};

export default Home;