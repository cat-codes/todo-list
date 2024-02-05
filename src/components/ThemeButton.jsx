import React from 'react'
import './ThemeButton.css'
import { GetThemeValue } from './ThemeProvider';

function ThemeButton() {
    const {theme, toggleTheme} = GetThemeValue();
    
    return (
        <button 
            id={theme === 'dark' ? 'buttonDark' : 'button'} 
            type='button' 
            onClick={toggleTheme}
            aria-label={`Toggle ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
        />
    );
}

export default ThemeButton;
