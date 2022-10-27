import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogComing from '../../Error/BlogComing';
import LeftAside from '../aside/LeftAside';
import RightSide from '../aside/RightSide';
import LoadingAnim from '../loading-anim/LoadingAnim';
import LearnSubject from './LearnSubject';

const LearnPage = () => {
    const fetchData = useLoaderData();
    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-5 '>
            <div>
                <LeftAside></LeftAside>
            </div>
            <div className='xl:col-span-3'>
                {
                    fetchData ? fetchData.data.length? fetchData.data.map((elm,idx) => <LearnSubject key={idx} data={elm}></LearnSubject>) : <BlogComing></BlogComing> : <div className='text-center my-[10%]'><LoadingAnim></LoadingAnim></div>
                }
            </div>
            <div>
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default LearnPage;