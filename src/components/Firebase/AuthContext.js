import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from './firebase.init';

const AuthData = createContext();

const AuthContext = ({children}) => {

    const auth = getAuth(app);

    const exitLocaleStorageData = localStorage.getItem('LP_Logged');

    const loggedValue = exitLocaleStorageData === 'true' ? true : false;

    const [userData,setUserData] = useState(null);
    const [loaded,setLoaded] = useState(true);
    const [logged,setLogged] = useState(loggedValue);

    const googleProv = new GoogleAuthProvider(app);
    const githubProv = new GithubAuthProvider(app);

    const logIn = (email,pass) => {
        return signInWithEmailAndPassword(auth,email,pass);
    }
    const signUp = (email,pass) => {
        return createUserWithEmailAndPassword(auth,email,pass);
    }
    const logOut = () => {
        return signOut(auth);
    }
    const signWithGoogle = () => {
        return signInWithPopup(auth,googleProv);
    }
    const signWithGithub = () => {
        return signInWithPopup(auth,githubProv);
    }
    const profileUpdate = (name,prflImg) => {
        return updateProfile(auth.currentUser,{
            displayName: `${name}`,
            photoURL: `${prflImg}`
        });
    }

    useEffect(()=>{
        const stopObs = onAuthStateChanged(auth,user=>{
            logged && setUserData(user);
            setLoaded(false);
        })
        return () => stopObs();
    },[logged])

    console.log(userData)

    const authInfo = {logIn,userData,loaded,signUp,logOut,signWithGoogle,signWithGithub,profileUpdate,exitLocaleStorageData,setLogged};

    return (
        <AuthData.Provider value={authInfo}>
            {children}
        </AuthData.Provider>
    );
};

export {
    AuthContext,
    AuthData
};