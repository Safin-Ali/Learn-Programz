import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthData } from '../Firebase/AuthContext';
import Registerimg from './images/register-image.png';
import {BiCodeAlt} from 'react-icons/bi';
import AlertMsg from '../Alert-Material/AlertMsg';
import { ThemeUI } from '../darkTheme/DarkTheme';


const Registration = () => {

    const {signUp,userData,profileUpdate} = useContext(AuthData);

    const [passError,setPassError] = useState();

    // Theme Boolean Toggle State

    const {themeUI} = useContext(ThemeUI);

    const navigate = useNavigate();

    const [errtxt,setErrText] = useState();

    const [alrtBoo,setAlrtBoo] = useState(false);

     // Get Error Popup Function

    function handleErr () {
        setAlrtBoo(true);
        setTimeout(()=>setAlrtBoo(false),4000)
    }

    // handle sign up button action in this function

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
            finalpass && signUp(email,finalpass)
            .then(result => {
                profileUpdate(userName,userImageUrl)
                .then(()=>{});
                navigate('/login');
                form.reset();
            })
            .catch(e=>{
                console.log(e)
                if(e.message === 'Firebase: Error (auth/email-already-in-use).'){
                    handleErr()
                    setErrText(e.message)
                }else if(e.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
                    handleErr()
                    setErrText(e.message)
                }
            })
        }
    
    }

    // Toggle Show/Hide Password

    // set input type password to text

    const [show,setShow] = useState(false);

    const togglePassShow = () => setShow(!show);

    // validation pass to confirm pass in this function

    function checkPassValid (form,pass,confPass) {
        if(pass === confPass){
            setPassError(false)
            return confPass;
        }
        else{
            setErrText('Password Not Match! Please Again Set Password');
            handleErr();
            setPassError(true)
            form.confPassword.value = '';
            return null
        }
    }

    // if user already logged then automatic redirect home page 

    if(userData) {
        navigate('/')
    }
    else{
        return (
        <>
            <Link to={'/home'} className={`text-3xl text-center block ${!themeUI ? 'text-slate-800' : 'text-slate-200'} py-[3%]`}>Learn<BiCodeAlt className='inline text-pinkBtn text-4xl'></BiCodeAlt>Programz</Link>
            <section className='flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row justify-center items-center max-h-full py-[2.5%]'>
                <div>
                 <img src={Registerimg} alt="Vector" />
                </div>
                <div className='border px-[6%] md:px-[10%] lg:px-[3%] py-[2%] rounded shadow-md'>
                <h3 className={`text-center ${!themeUI ? 'text-slate-900' : 'text-slate-200'} text-3xl uppercase`}>Sign Up</h3>
                <form onSubmit={handleRegistrationData}>
                    <div className='text-center my-3'>
                        <input type="text" name='userName' placeholder='Enter Full Name' className={`px-2 border py-1 w-[95%] ${!themeUI ? 'bg-slate-50 text-slate-800' : 'bg-slate-800 text-slate-300'} font-medium rounded-sm' required`}/>
                    </div>
                    <div className='text-center my-3'>
                        <input type="text" name='userThumb' placeholder='Enter User Image URL' className={`px-2 border py-1 w-[95%] ${!themeUI ? 'bg-slate-50 text-slate-800' : 'bg-slate-800 text-slate-300'} font-medium rounded-sm' required`}/>
                    </div>
                    <div className='text-center my-3'>
                        <input type="email" name='email' placeholder='Enter Email' className={`px-2 border py-1 w-[95%] ${!themeUI ? 'bg-slate-50 text-slate-800' : 'bg-slate-800 text-slate-300'} font-medium rounded-sm' required`}/>
                    </div>
                    <div className='text-center my-3'>
                        <input type={!show?'password':'text'} name='password' placeholder='Enter Password' className={`px-2 border py-1 w-[95%] ${!themeUI ? 'bg-slate-50 text-slate-800' : 'bg-slate-800 text-slate-300'} font-medium rounded-sm' required`}/>
                    </div>
                    <div className='text-center my-3'>
                        <input type={!show?'password':'text'} name='confPassword' placeholder='Confirm Password' className={`px-2 border ${!themeUI ? 'bg-slate-50 text-slate-800' : 'bg-slate-800 text-slate-300'} ${passError && 'border-red-600'} font-medium py-1 w-[95%] rounded-sm`} required/>
                    </div>
                    <div className='text-center my-3'>
                       <p className={`text-left ${!themeUI ? 'text-slate-900' : 'text-slate-200'}`}><input className='mx-2 w-4 h-4' type="checkbox" onClick={togglePassShow}/>{!show? 'Show' : 'Hide'}</p>
                    </div>
                    <div className='text-center my-3'>
                        <button className='bg-blue-600 transition-all hover:bg-blue-700  px-2 py-1 rounded-md text-sky-50'>Sign up</button>
                    </div>
                    
                    <div className={`text-center ${!themeUI ? 'text-slate-900' : 'text-slate-200'}`}>
                    <p>Already Have Account! <br /> Please, <Link className='text-blue-500' to={'/login'}>Log In</Link></p>
                    
                    </div>
                </form>
                </div>
                <div className={alrtBoo ? 'block' : 'hidden'}>
                <AlertMsg errTxt={errtxt}></AlertMsg>
                </div>
            </section>
        </>
        );
    }
};

export default Registration;