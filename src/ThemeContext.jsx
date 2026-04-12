import React, { useContext, useEffect, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme(){
    return useContext(ThemeContext);
}

export function useThemeUpdate(){
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({children}){
    const storedTheme = localStorage.getItem('isDark');
    const [darkTheme, setDarkTheme] = useState(
    storedTheme ? storedTheme === 'true' : true
    );

    useEffect(()=>{
        localStorage.setItem('isDark', darkTheme.toString());
    },[darkTheme])

    function toggleTheme(){
        setDarkTheme(prevTheme => !prevTheme);
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}