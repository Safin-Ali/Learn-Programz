import React from 'react';
import AutoTyping from '../auto-typing-anim/AutoTyping';
import Slider from '../slider/Slider';

const Home = () => {
    return (
        <section className='grid grid-cols-2 my-10'>
            {/* slider */}
            <div>
                <Slider></Slider>
            </div>
            {/* Text Change Animation */}
            <div>
               <AutoTyping></AutoTyping>
            </div>
        </section>
    );
};

export default Home;