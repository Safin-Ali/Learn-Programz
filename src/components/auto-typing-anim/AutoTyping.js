import React, { useEffect, useState } from 'react';
import './AutoTyping.css'

const AutoTyping = () => {

    const [count,setCount] = useState(0);
    const textArr = [
        'is can help you understand technology.',
        'is can enhance problem-solving skills.',
        'is can complement creativity.',
    ]
    const [text,setText] = useState();



    function writing () {
            setTimeout(()=>{
                setText(textArr[0])
                console.log(0)
            },0)
            setTimeout(()=>{
                setText(textArr[1])
                console.log(1)
            },6000)
            setTimeout(()=>{
                setText(textArr[2])
                console.log(2)
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
            <span className='text capitalize changing-text text-gray-800'> {text}
            </span>
            </p>

        </div>
    );
};

export default AutoTyping;