import React from 'react';
import { BsGithub } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='flex justify-center items-center min-h-screen'>
            <div className='border p-5 rounded shadow-md'>
                <h3 className='text-center text-3xl uppercase'>Login</h3>
            <form action="">
                <div className='text-center my-3'>
                    <input type="email" name='email' placeholder='Enter Email' className='px-2 border py-1 w-[85%] rounded-sm' />
                </div>
                <div className='text-center'>
                    <input type="password" name='password' placeholder='Enter Password' className='px-2 border py-1 w-[85%] rounded-sm' />
                </div>
                <div className='text-center my-3'>
                    <button className='bg-blue-600 transition-all hover:bg-blue-700  px-2 py-1 rounded-md text-sky-50'>SignIn</button>
                </div>
                <div>
                    <p>Not Have Account? Please, <Link className='text-blue-500' to={'/signup'}>Register</Link></p>
                </div>
                <div className='flex justify-center items-center'>
                    <span className='inline-block bg-slate-900 h-[1px] w-full'></span>
                    <span className='mx-2 text-sm font-medium'>Or</span>
                    <span className='inline-block bg-slate-900 h-[1px] w-full'></span>
                </div>
                <div>
                    <p className='text-center'>Continue With</p>
                    <div className='flex justify-center'>
                        <p className='mx-1 p-1 cursor-pointer border rounded-full'><FcGoogle className='text-2xl'></FcGoogle></p>
                        <p className='mx-1 p-1 cursor-pointer border rounded-full'><BsGithub className='text-2xl'></BsGithub></p>
                    </div>
                </div>
            </form>
            </div>
        </section>
    );
};

export default Login;