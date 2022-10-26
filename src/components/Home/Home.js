import React from 'react';
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
                <h1>RTCC</h1>
            </div>
        </section>
    );
};

export default Home;