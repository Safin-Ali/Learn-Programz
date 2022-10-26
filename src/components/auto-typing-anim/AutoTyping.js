import React, { useEffect, useState } from 'react';
import './AutoTyping.css'

const AutoTyping = () => {

    const [count,setCount] = useState(0);
    const textArr = [
        'xxxxxxxxxxxxxxxxxx',
        'mcamckamcmamclacmamlca',
        'abcancanckancancka',
        'abcanckacnkacalcla'
    ]
    const [text,setText] = useState();



    function xx () {
            setTimeout(()=>{
                setText(textArr[0])
                console.log(0)
            },0)
            setTimeout(()=>{
                setText(textArr[1])
                console.log(1)
            },4000)
            setTimeout(()=>{
                setText(textArr[2])
                console.log(2)
            },8000)
    }

    useEffect(()=>{
        xx()
        setInterval(xx,12000)
    },[])
    

    return (
        <div>
            <h1>I am Safin Ali |</h1>
            <p className='text'>Programming language :
            <span className='text changing-text'> {text}
            </span>
            </p>

        </div>
    );
};

export default AutoTyping;