import React, { createContext, useEffect, useState } from 'react';


export const ThemeUI = createContext();

const DarkTheme = ({children}) => {

  const existTheme = localStorage.getItem('theme');

  // Theme Default Value

    const [themeUI,setTheme] = useState(true);

    const themeData = {themeUI,setTheme};

    useEffect(()=>{
      existTheme === 'light' ? setTheme(false) : setTheme(true);
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