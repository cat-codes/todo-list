import React from 'react'
import './Background.css'
import { GetThemeValue } from './ThemeProvider'

const Background = () => {
    const {theme} = GetThemeValue();

    return (
        <div className={theme === 'dark' ? 'backgroundDark' : 'background'}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Background
