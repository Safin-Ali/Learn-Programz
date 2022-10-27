import React, { useContext, useEffect, useState } from 'react';
import { ThemeUI } from '../darkTheme/DarkTheme';
import './AutoTyping.css'

const AutoTyping = () => {

    const {themeUI} = useContext(ThemeUI);

    const textArr = [
        'is can help you understand technology.',
        'is can enhance problem-solving skills.',
        'is can complement creativity.',
    ]
    const [text,setText] = useState();

    function writing () {
            setTimeout(()=>{
                setText(textArr[0])
            },0)
            setTimeout(()=>{
                setText(textArr[1])
            },6000)
            setTimeout(()=>{
                setText(textArr[2])
            },12000)
    }



    useEffect(()=>{
        writing()
        setInterval(writing,18000)
    },[])
    

    return (
        <div>
            <h1 className='text-3xl my-10'><span className='text-pinkBtn'>Hi,</span> I am Safin Ali <span className='text-pinkBtn text-4xl'>|</span></h1>
            <p className='text text-xs text-center lg:text-left lg:text-base text-pinkBtn font-monoLisa-bold'>Programming Language :
            <span className={`text capitalize ${!themeUI ? 'text-gray-800' : 'text-slate-200'} changing-text ${!themeUI ?'before:bg-[#f1f4f6]':'before:bg-slate-800'}`}> {text}
            </span>
            </p>

        </div>
    );
};

export default AutoTyping;