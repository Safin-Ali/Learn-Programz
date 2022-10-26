import React, { useContext, useEffect, useState } from 'react';
import { APIData } from '../../data/DataFetch';
import {Link} from 'react-router-dom'

const LeftAside = () => {

    const fetchData = useContext(APIData);

    return (
        <div className='py-10 px-5 border-r min-h-screen sticky top-0'>
            <h1 className='text-center text-2xl underline'>Learn More</h1>
            <ul className='text-center'>
                {fetchData?.map(elm => <li key={elm.id} className='my-3 border shadow-sm'><Link to={`/category/${elm.name.toLowerCase()}`} className='text-blue-600 inline-block'>{elm.name}</Link></li>)}
            </ul>
        </div>
    );
};

export default LeftAside;