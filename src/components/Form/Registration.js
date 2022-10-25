import React from 'react';
import { BsGithub } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
    <section className='flex justify-center items-center min-h-screen'>
        <div className='border px-[3%] py-[2%] rounded shadow-md'>
            <h3 className='text-center text-3xl uppercase'>Sign Up</h3>
        <form action="">
            <div className='text-center my-3'>
                <input type="text" name='userName' placeholder='Enter Full Name' className='px-2 border py-1 w-[95%] rounded-sm' required/>
            </div>
            <div className='text-center my-3'>
                <input type="email" name='email' placeholder='Enter Email' className='px-2 border py-1 w-[95%] rounded-sm' required/>
            </div>
            <div className='text-center my-3'>
                <input type="password" name='password' placeholder='Enter Password' className='px-2 border py-1 w-[95%] rounded-sm' required/>
            </div>
            <div className='text-center my-3'>
                <input type="password" name='confPassword' placeholder='Confirm Password' className='px-2 border py-1 w-[95%] rounded-sm' required/>
            </div>
            <div className='text-center my-3'>
                <button className='bg-blue-600 transition-all hover:bg-blue-700  px-2 py-1 rounded-md text-sky-50'>SignUp</button>
            </div>
            <div className='text-center'>
            <p>Already Have Account! <br /> Please, <Link className='text-blue-500' to={'/login'}>Log In</Link></p>
            </div>
        </form>
        </div>
    </section>
    );
};

export default Registration;