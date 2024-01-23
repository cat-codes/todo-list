import React, { useState, useEffect } from 'react'
import './Theme.css'
import { GetThemeValue } from './ContextTheme';

function Theme() {

    const {toggleTheme} = GetThemeValue();

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
        <img src='src\assets\theme.png' onClick={toggleTheme}></img>
    )
}

export default Theme
