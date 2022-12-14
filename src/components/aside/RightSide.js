import React, { useContext } from 'react';
import { AuthData } from '../Firebase/AuthContext';
import LoadingAnim from '../loading-anim/LoadingAnim';
import {BsPersonCheckFill} from 'react-icons/bs'
import {GrFormClose} from 'react-icons/gr'
import { useNavigate } from 'react-router-dom';
import { ThemeUI } from '../darkTheme/DarkTheme';

const RightSide = () => {

    const {userData,logOut} = useContext(AuthData);

    const {photoURL,phoneNumber,emailVerified,email,displayName,providerId} = userData;

    const navigate = useNavigate();

    const {themeUI} = useContext(ThemeUI);

    function handleSignOut () {
        logOut()
        .then(()=>{
            localStorage.removeItem('LP_Logged')
            navigate('/login')
        })
    }

    return (
        <div className='py-10 border-l flex justify-center items-center flex-col min-h-screen lg:sticky lg:top-0'>
            {/* User Profile */}
            <div className='w-20 rounded-full'>
                <img src={userData && photoURL} className='rounded-lg' alt="User Avatar" />
            </div>
            <div className={`my-10 ${!themeUI ? 'text-slate-800' : 'text-slate-100'}`}>
                <p className='my-2 font-medium'>{
                    displayName ? displayName :  <LoadingAnim></LoadingAnim>
                }</p>
                <p className='my-2 font-medium'>Email Varified: {
                emailVerified ? 
                <BsPersonCheckFill className={`inline text-lg ${!themeUI ? 'text-slate-800' : 'text-slate-200'}`}></BsPersonCheckFill>
                :
                <GrFormClose className='inline text-lg text-red-600'></GrFormClose>
                }
                </p>
                <p className='my-2 font-medium'>Email: {email}</p>
                <p className='my-2 font-medium'>{
                    phoneNumber ? phoneNumber : 'Not Added Phone Number'
                }</p>
                <p className='my-2 font-medium text-center capitalize text-orange-600'>{providerId} 🔥</p>
                <div className='text-center'>
                <button onClick={handleSignOut} className='bg-pinkBtn my-5 px-2 py-1 rounded-md text-white hover:bg-pink-500'>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default RightSide;