import React, { useContext, useEffect, useState } from 'react';
import { APIData } from '../../data/DataFetch';
import {Link} from 'react-router-dom'
import { ThemeUI } from '../darkTheme/DarkTheme';

const LeftAside = () => {

    const fetchData = useContext(APIData);

    const {themeUI} = useContext(ThemeUI);

    return (
        <div className='py-10 px-5 border-r min-h-screen sticky top-0'>
            <h1 className={`text-center ${!themeUI ? 'text-neutral-800' : 'text-neutral-100'} text-2xl underline`}>Learn More</h1>
            <ul className='text-center'>
                {fetchData?.map(elm => <li key={elm.id} className='my-3 border shadow-sm'><Link to={`/category/${elm.name.toLowerCase()}`} className='text-blue-600 hover:text-blue-800 inline-block'>{elm.name}</Link></li>)}
            </ul>
        </div>
    );
};

export default LeftAside;