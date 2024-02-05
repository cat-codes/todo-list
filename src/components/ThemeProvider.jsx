import React, {useContext, createContext, useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    // Loads data from local storage
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
    }, []);

    // Updates local storage
    useEffect(() => {
        setTheme((prevTheme) => {
            if (prevTheme !== theme) {
                localStorage.setItem('theme', prevTheme);
            }
            return prevTheme;
        });
    }, [theme]); 

    const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// Validating props
ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export const GetThemeValue = () => useContext(ThemeContext)