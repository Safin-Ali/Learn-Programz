import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthData } from '../components/Firebase/AuthContext';
import LoadingAnim from '../components/loading-anim/LoadingAnim';

const PrivateRoute = ({children}) => {

    const {userData,loaded} = useContext(AuthData);

    let location = useLocation();

    if(loaded){
        return <div className='flex justify-center items-center min-h-screen'>
            <LoadingAnim></LoadingAnim>
        </div>
    }
    else if(!userData){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    else{
        return children
    }

};

export default PrivateRoute;