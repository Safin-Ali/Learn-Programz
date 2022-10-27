import React, { createContext, useEffect, useState } from 'react';


export const ThemeUI = createContext();

const DarkTheme = ({children}) => {

  const existTheme = localStorage.getItem('theme');

    const [themeUI,setTheme] = useState(false);

    const themeData = {themeUI,setTheme};

    useEffect(()=>{
      existTheme === 'dark' ? setTheme(true) : setTheme(false);
    },[])

    const getCurrThemeName = !themeUI ? 'light' : 'dark'

    localStorage.setItem('theme',getCurrThemeName)


    return (
       <ThemeUI.Provider value={themeData}>
         {children}
       </ThemeUI.Provider>
    );
};

export default DarkTheme;