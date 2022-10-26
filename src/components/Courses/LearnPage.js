import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogComing from '../../Error/BlogComing';
import LeftAside from '../aside/LeftAside';
import RightSide from '../aside/RightSide';
import LearnSubject from './LearnSubject';

const LearnPage = () => {
    const fetchData = useLoaderData();
    console.log(fetchData.data)
    return (
        <div className='grid gap-10 grid-cols-5'>
            <div>
                <LeftAside></LeftAside>
            </div>
            <div className='col-span-3'>
                {fetchData.data.length? fetchData.data.map((elm,idx) => <LearnSubject key={idx} data={elm}></LearnSubject>) : <BlogComing></BlogComing>}
            </div>
            <div>
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default LearnPage;