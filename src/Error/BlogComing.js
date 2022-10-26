import React from 'react';
import {BsEmojiWink} from 'react-icons/bs'

const BlogComing = () => {
    return (
        <section className='flex flex-col justify-center items-center min-h-full'>
            <h1 style={{textShadow:'1px 1px 50px'}} className='text-md md:text-xl lg:text-4xl text-slate-900'><span className='text-pinkBtn'>Tutorial</span> Coming soon</h1>
            <BsEmojiWink className='text-5xl my-2 text-pinkBtn'></BsEmojiWink>
        </section>
    );
};

export default BlogComing;