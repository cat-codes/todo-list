import React, { useState, useEffect } from 'react'
import './Theme.css'
import { GetThemeValue } from './ContextTheme';

function Theme() {

    const {darkTheme, toggleTheme} = GetThemeValue();

    // Sets theme
    const [theme, setTheme] = useState('light');

    // Loads data from local storage
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
    }, []);

    // Updates local storage
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);    
    
    return (
        <button className={darkTheme ? 'darkButton' : 'button'} id='buttonTheme' type='button' onClick={toggleTheme}/>
    )
}

export default Theme
