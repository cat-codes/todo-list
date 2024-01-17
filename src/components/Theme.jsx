import React, { useState, useEffect } from 'react'
import './Theme.css'

function Theme() {

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

    // Toggles theme
    const toggleTheme = () => {
        setTheme((prevTheme) => !prevTheme)
    };    
    
    return (
        <button id='buttonTheme' type='button' onClick={toggleTheme}/>
    )
}

export default Theme
