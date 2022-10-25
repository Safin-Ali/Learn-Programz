import React, { createContext, useEffect, useState } from 'react';

const APIData = createContext();

const DataFetch = ({children}) => {

    const [ProgramsData,setProgramzData] = useState();

    useEffect(()=>{
        fetch('https://programz-api.vercel.app/')
        .then(res => res.json())
        .then(data => setProgramzData(data));
    },[])

    return (
        <APIData.Provider value={ProgramsData}>
            {children}
        </APIData.Provider>
    );
};

export  {
    DataFetch,
    APIData
};