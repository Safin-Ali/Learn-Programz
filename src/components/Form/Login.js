import React, { useContext, useState } from 'react';
import { BsGithub } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { AuthData } from '../Firebase/AuthContext';
import LoginImg from './images/login-image.png';
import {BiCodeAlt} from 'react-icons/bi';
import AlertMsg from '../Alert-Material/AlertMsg';
import { ThemeUI } from '../darkTheme/DarkTheme';

const Login = () => {

    const [errtxt,setErrText] = useState();

    const {themeUI} = useContext(ThemeUI);

    const navigate = useNavigate();

    const [alrtBoo,setAlrtBoo] = useState(false);

    const {logIn,userData,signWithGoogle,signWithGithub} = useContext(AuthData);

    let location = useLocation();

    let from = location.state?.from?.pathname || "/";


    // Get Error Popup Function

    function handleErr () {
        setAlrtBoo(true);
        setTimeout(()=>setAlrtBoo(false),4000)
    }

    // handle login button  in this function

    function handleLoginData (e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email,password)
        .then(result => {    
            navigate(from, { replace: true }); 
            form.reset();   
        })
        .catch(e=>{
            console.log(e.message);
            if(e.message === 'Firebase: Error (auth/user-not-found).') {
                handleErr()
                setErrText(e.message)
            }
            else if (e.message=== 'Firebase: Error (auth/wrong-password).') {
                handleErr()
                setErrText(e.message)
            }
        })

    }

    // Condition For Redirect Home Page

    if(userData?.uid){
        navigate('/');  
    }
    else{
        return (
            <>
            <Link to={'/home'} className={`text-3xl text-center block ${!themeUI ? 'text-slate-800' : 'text-slate-200'} py-[4%]`}>Learn<BiCodeAlt className='inline text-pinkBtn text-4xl'></BiCodeAlt>Programz</Link>
            <section className='flex flex-col lg:flex-row justify-center items-center min-h-full py-2'>
                <div>
                    <img src={LoginImg} alt="Vector" />
                </div>
                <div className={`border px-[6%] md:px-[10%] lg:px-[3%] mb-5 py-[3%] rounded shadow-md`}>
                    <h3 className={`text-center ${!themeUI ? 'text-slate-900' : 'text-slate-200'} text-3xl uppercase`}>Login</h3>
                <form onSubmit={handleLoginData}>
                    <div className='text-center my-3'>
                        <input type="email" name='email' placeholder='Enter Email' className={`px-2 ${!themeUI ? 'bg-slate-50' : 'bg-slate-600'} border py-1 w-[95%] rounded-sm`} />
                    </div>
                    <div className='text-center my-3'>
                        <input type="password" name='password' placeholder='Enter Password' className={`px-2 ${!themeUI ? 'bg-slate-50' : 'bg-slate-600'} border py-1 w-[95%] rounded-sm`} />
                    </div>
                    <div className='text-center my-3'>
                        <button className='bg-blue-600 transition-all hover:bg-blue-700  px-2 py-1 rounded-md text-sky-50'>Sign In</button>
                    </div>
                    <div className={`text-center ${!themeUI ? 'text-slate-900' : 'text-slate-200'}`}>
                        <p>Not Have Account? <br /> Please, <Link className='text-blue-500' to={'/signup'}>Register</Link></p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <span className={`inline-block h-[1px] ${!themeUI ? 'bg-slate-900' : 'bg-slate-200'} w-full`}></span>
                        <span className={`mx-2 text-sm font-medium ${!themeUI ? 'text-slate-900' : 'text-slate-200'}`}>Or</span>
                        <span className={`inline-block h-[1px] ${!themeUI ? 'bg-slate-900' : 'bg-slate-200'} w-full`}></span>
                    </div>
                    <div>
                        <p className={`text-center ${!themeUI ? 'text-slate-900' : 'text-slate-200'}`}>Continue With</p>
                        <div className='flex justify-center'>
                            <p className='mx-1 p-1 cursor-pointer border rounded-full' onClick={signWithGoogle}><FcGoogle className='text-2xl'></FcGoogle></p>
                            <p onClick={signWithGithub} className='mx-1 p-1 cursor-pointer border rounded-full'><BsGithub className={`text-2xl ${!themeUI ? 'text-stone-900' : 'text-slate-200'}`}></BsGithub></p>
                        </div>
                    </div>
                </form>
                </div>
            </section>
            <div className={alrtBoo ? 'block' : 'hidden'}>
            <AlertMsg errTxt={errtxt}></AlertMsg>
            </div>
            </>
        );
    }
};

export default Login;