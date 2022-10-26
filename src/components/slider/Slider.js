import React, { useEffect, useState } from 'react';
import Image1 from './images/image-1.png';
import Image2 from './images/image-2.png';
import Image3 from './images/image-3.png';
import Image4 from './images/image-4.jpg';
import Image5 from './images/image-5.png';

const Slider = () => {   
    const imgArray = [Image1,Image2,Image3,Image4,Image5];
    const [count,setCount] = useState(0)
    const [imageSlide,setImgSlide] = useState(imgArray[count]);

    function timingCountPromise () {
        return new Promise((res,rej)=>{
            setInterval(()=>{
               res(countCondition())
            },1000)
        })
    }

    function countCondition () {
        if(count >= imgArray.length-1){
            return 0
        }
        else{
            return count+1
        }
    }

    useEffect(()=>{
        timingCountPromise()
        .then(value => {
            setCount(value)
            setImgSlide(imgArray[count])
        })
    },[count])

    return (
        <div>
            <img src={imageSlide} className='w-2/3 mx-auto h-auto' alt="Slider Image" />
        </div>
    );
};

export default Slider;