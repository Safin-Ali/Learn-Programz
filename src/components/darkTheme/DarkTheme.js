import React, { createContext, useState } from 'react';


export const ThemeUI = createContext();

const DarkTheme = ({children}) => {

    const [themeUI,setTheme] = useState(false);

    const themeData = {themeUI,setTheme}

    return (
       <ThemeUI.Provider value={themeData}>
         {children}
       </ThemeUI.Provider>
    );
};

export default DarkTheme;