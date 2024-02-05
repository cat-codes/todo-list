import React, {useState} from 'react'
import './Header.css'
import { v4 as uuidv4 } from 'uuid';
import { GetThemeValue } from './ThemeProvider'
import { GetList } from './ListProvider'

const Header = () => {
    const {theme} = GetThemeValue();
    const {list, setList} = GetList();

    // Sets input value
    const [inputValue, setInputValue] = useState(''); 

    // Grabs new input value
    const handleInputChange = (event) => {
        setInputValue(event.target.value); // event = onChange, target = new input, value = input text
    }

    // Makes 'Enter' key equal to '+' button
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask();
        }
    };

    // Adds task to the list
    const addTask = () => {
        if (inputValue.trim() !== '') {
            setList([...list, {id: uuidv4(), task: inputValue}]);
            setInputValue('');
        }
    }

    // Sorts task with undone ones first
    const sort = () => {
        const tasksUndone = list.filter(task => !task.isChecked);
        const tasksDone = list.filter(task => task.isChecked);
        setList(tasksUndone.concat(tasksDone));
    }

    return (
        <div 
            id='header'
            style={{
                background: theme === 'dark' ? 'rgba(34, 34, 59, 0.7)' : 'rgba(214, 107, 160, 0.7)',
                border: theme === 'dark' ? '2px solid #39375b' : '2px solid rgb(34, 34, 59)',
                boxShadow: theme === 'dark' ? '2px 5px 8px, rgba(242, 233, 228, 0.7)' : '2px 5px 10px rgba(74, 78, 105, 0.7)'
            }}
        >
            <form>
                <label>
                    <input
                        id={theme === 'dark' ? 'inputDark' : 'input'}
                        style={{
                            background: theme === 'dark' ? '#5d5e76' : 'white',
                            color: theme === 'dark' ? 'white' : 'black'
                        }}
                        type='text' 
                        value={inputValue || ''} 
                        onChange={handleInputChange} 
                        onKeyDown={handleKeyPress} 
                        placeholder='New Task'
                    />
                </label>
                <button 
                    className={theme === 'dark' ? 'buttonDark' : 'button'} 
                    id='buttonAdd' 
                    type='button' 
                    onClick={addTask}
                    aria-label={`Add task: ${inputValue}`}
                />
                <button 
                    className={theme === 'dark' ? 'buttonDark' : 'button'} 
                    id='buttonSort' 
                    type='button' 
                    onClick={() => sort()}
                    aria-label={`Sort tasks`}    
                />
            </form>
        </div>
    )
}

export default Header
