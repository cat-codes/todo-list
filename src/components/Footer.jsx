import React from 'react'
import './Footer.css'
import { GetThemeValue } from './ThemeProvider'
import { GetList } from './ListProvider'

const Footer = () => {
    const {theme} = GetThemeValue();
    const {list, setList} = GetList();

    // Undone task count
    const undoneTasks = list.filter(task => !task.isChecked).length;

    // Removes all tasks
    const purge = () => {
        const confirmed = window.confirm('Are you sure you want to clear all tasks?');
        if (confirmed) {
            setList([]);
        }
    }

    return (
    <div 
        id='footer' 
        style={{
            display: list.length !== 0 ? 'flex' : 'none',
        }}
    >
        <p>Tasks left: {undoneTasks}</p>
        <button 
            className={theme === 'dark' ? 'buttonDark' : 'button'} 
            id='buttonPurge' 
            type='button' 
            onClick={purge}
            aria-label={`Clear all tasks`}
        />
    </div>
    )
}

export default Footer
