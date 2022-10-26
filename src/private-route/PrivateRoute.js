import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthData } from '../components/Firebase/AuthContext';
import LoadingAnim from '../components/loading-anim/LoadingAnim';

const PrivateRoute = ({children}) => {

    const {userData,loaded} = useContext(AuthData);

    if(loaded){
        return <div className='flex justify-center items-center min-h-screen'>
            <LoadingAnim></LoadingAnim>
        </div>
    }
    else if(!userData){
        return <Navigate to={'/login'}></Navigate>
    }
    else{
        return children
    }

};

export default PrivateRoute;