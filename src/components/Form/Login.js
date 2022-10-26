import React, { useContext, useState } from 'react';
import { BsGithub } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { Link,useNavigate } from 'react-router-dom';
import { AuthData } from '../Firebase/AuthContext';
import LoginImg from './images/login-image.png';
import {BiCodeAlt} from 'react-icons/bi';

const Login = () => {

    const {logIn,userData,setLogged,signWithGoogle,signWithGithub} = useContext(AuthData);

    const navigate = useNavigate();

    const [shake,setShake] = useState();

    function handleLoginData (e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email,password)
        .then(result => {
            localStorage.setItem('LP_Logged',true)
            setLogged(true)
            navigate('/')
            
        })
        .catch(e=>{
            console.log(e.message);
            if(e.message === 'Firebase: Error (auth/user-not-found).') {

            }
        })

    }
    if(userData){
        
    }
    else{
        return (
            <>
            <Link to={'/home'} className='text-3xl text-center block text-slate-800 py-[4%]'>Learn<BiCodeAlt className='inline text-pinkBtn text-4xl'></BiCodeAlt>Programz</Link>
            <section className='flex flex-col lg:flex-row justify-center items-center min-h-full'>
                <div>
                    <img src={LoginImg} alt="" />
                </div>
                <div className='border px-[6%] md:px-[10%] lg:px-[3%] mb-5 py-[3%] rounded shadow-md'>
                    <h3 className='text-center text-3xl uppercase'>Login</h3>
                <form onSubmit={handleLoginData}>
                    <div className='text-center my-3'>
                        <input type="email" name='email' placeholder='Enter Email' className='px-2 border py-1 w-[95%] rounded-sm' />
                    </div>
                    <div className='text-center my-3'>
                        <input type="password" name='password' placeholder='Enter Password' className='px-2 border py-1 w-[95%] rounded-sm' />
                    </div>
                    <div className='text-center my-3'>
                        <button className='bg-blue-600 transition-all hover:bg-blue-700  px-2 py-1 rounded-md text-sky-50'>Sign In</button>
                    </div>
                    <div className='text-center'>
                        <p>Not Have Account? <br /> Please, <Link className='text-blue-500' to={'/signup'}>Register</Link></p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <span className='inline-block bg-slate-900 h-[1px] w-full'></span>
                        <span className='mx-2 text-sm font-medium'>Or</span>
                        <span className='inline-block bg-slate-900 h-[1px] w-full'></span>
                    </div>
                    <div>
                        <p className='text-center'>Continue With</p>
                        <div className='flex justify-center'>
                            <p className='mx-1 p-1 cursor-pointer border rounded-full' onClick={signWithGoogle}><FcGoogle className='text-2xl'></FcGoogle></p>
                            <p onClick={signWithGithub} className='mx-1 p-1 cursor-pointer border rounded-full'><BsGithub className='text-2xl'></BsGithub></p>
                        </div>
                    </div>
                </form>
                </div>
            </section>
            </>
        );
    }
};

export default Login;