import React, { useContext } from 'react';
import AutoTyping from '../auto-typing-anim/AutoTyping';
import { ThemeUI } from '../darkTheme/DarkTheme';
import Slider from '../slider/Slider';

const Home = () => {
    const {themeUI} = useContext(ThemeUI);
    return (
        <main className={`grid ${!themeUI ? 'bg-inherit' : 'bg-[#1B2430]'} grid-cols-1 lg:grid-cols-2 items-center py-10`}>
            {/* slider */}
            <div className={`lg:border-r-4 border-pink-500 shadow-md lg:shadow-none`}>
                <Slider></Slider>
            </div>
            {/* Text Change Animation */}
            <div className={`flex items-center px-6 ${!themeUI ? 'text-inherit' : 'text-slate-200'}`}>
               <AutoTyping></AutoTyping>
            </div>
        </main>
    );
};

export default Home;