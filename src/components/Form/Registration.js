import React, { useContext, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthData } from '../Firebase/AuthContext';
import Registerimg from './images/register-image.png';
import {BiCodeAlt} from 'react-icons/bi';


const Registration = () => {
    const {signUp,userData,profileUpdate} = useContext(AuthData);

    const [passError,setPassError] = useState();

    const navigate = useNavigate();

    function handleRegistrationData (e) {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const userImageUrl = form.userThumb.value;
        const email = form.email.value;
        const password = form.password.value;
        const confPassword = form.confPassword.value;
        const finalpass = checkPassValid(form,password,confPassword);
        if(finalpass){
            console.log(password,finalpass)
            finalpass && signUp(email,finalpass)
            .then(result => {
                profileUpdate(userName,userImageUrl)
                .then(()=>{});
                navigate('/login');
            })
            .catch(e=>{
                console.log(e)
            })
        }
    
    }

    function checkPassValid (form,pass,confPass) {
        if(pass === confPass){
            setPassError(false)
            return confPass;
        }
        else{
            form.confPassword.value = '';
            setPassError(true)
            return null
        }
    }

    if(userData) {
        return
    }
    else{
        return (
        <>
            <Link to={'/home'} className='text-3xl text-center block text-slate-800 py-[4%]'>Learn<BiCodeAlt className='inline text-pinkBtn text-4xl'></BiCodeAlt>Programz</Link>
            <section className='flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 mb-5 lg:justify-evenly items-center min-h-full'>
                    <div>
                    <img src={Registerimg} alt="" />
                </div>
                <div className='border px-[6%] md:px-[10%] lg:px-[3%] py-[2%] rounded shadow-md'>
                    <h3 className='text-center text-3xl uppercase'>Sign Up</h3>
                <form onSubmit={handleRegistrationData}>
                    <div className='text-center my-3'>
                        <input type="text" name='userName' placeholder='Enter Full Name' className='px-2 border py-1 w-[95%] rounded-sm' required/>
                    </div>
                    <div className='text-center my-3'>
                        <input type="text" name='userThumb' placeholder='Enter User Image URL' className='px-2 border py-1 w-[95%] rounded-sm' required/>
                    </div>
                    <div className='text-center my-3'>
                        <input type="email" name='email' placeholder='Enter Email' className='px-2 border py-1 w-[95%] rounded-sm' required/>
                    </div>
                    <div className='text-center my-3'>
                        <input type="password" name='password' placeholder='Enter Password' className='px-2 border py-1 w-[95%] rounded-sm' required/>
                    </div>
                    <div className='text-center my-3'>
                        <input type="password" name='confPassword' placeholder='Confirm Password' className={`px-2 border ${passError && 'border-red-600'} py-1 w-[95%] rounded-sm`} required/>
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
        </>
            );
    }
};

export default Registration;