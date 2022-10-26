import React from 'react';
import {BiError} from 'react-icons/bi'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='flex justify-center flex-col items-center min-h-screen'>
            <BiError className='text-4xl'></BiError>
            <p className='my-3 text-3xl font-light text-red-500'>Error 404 not Found</p>
            <Link to={-1} className='text-pinkBtn border border-gray-800 px-2 py-1 rounded-lg'>Go back</Link>
        </section>
    );
};

export default ErrorPage;