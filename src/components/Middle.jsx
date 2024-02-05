import React from 'react'
import './Middle.css'
import { GetThemeValue } from './ThemeProvider'
import { GetList } from './ListProvider'

const Middle = () => {
    const {theme} = GetThemeValue();
    const {list, setList} = GetList();

    // Removes task from the list
    const removeTask = (taskId) => {
        setList((prevList) => prevList.filter(task => task.id !== taskId));
    }

    // Handles checkbox states
    const handleCheckboxChange = (taskId) => {
        setList((prevList) => prevList.map(task => task.id === taskId ? { ...task, isChecked: !task.isChecked } : task));
    }

    return (
        <div 
            id='list'
        style={{
            background: theme === 'dark' ? 'rgba(34, 34, 59, 0.80)' : 'rgba(242, 233, 228, 0.8',
            border: theme === 'dark' ? '2px solid #39375b' : '2px solid rgb(34, 34, 59)',
            boxShadow: theme === 'dark' ? '2px 5px 8px, rgba(242, 233, 228, 0.7)' : '2px 5px 10px rgba(74, 78, 105, 0.7)'
        }}
        >
            <ul>
                {list.map((task) => 
                    <li 
                        key={task.id}
                        style={{borderBottom: theme === 'dark' ? '1px solid black' : '2px solid rgba(154, 140, 152, 0.7'}}
                    >
                        <div id='taskNoButton'>
                            <input 
                                id={theme === 'dark' ? 'darkCheckbox' : 'checkbox'} 
                                type='checkbox' 
                                checked={task.isChecked} 
                                onChange={() => handleCheckboxChange(task.id)}
                            />
                            <span>
                                {task.task}
                            </span>
                        </div>
                        <button 
                            className={theme === 'dark' ? 'buttonDark' : 'button'} 
                            id='buttonRemove' 
                            type='button' 
                            onClick={() => removeTask(task.id)}
                            aria-label={`Remove task: ${task.task}`}
                        />
                    </li>
            )}</ul>
        </div>
    )
}

export default Middle
