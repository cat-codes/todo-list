import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './List.css';

function List() {

  // Sets list array
  const [list, setList] = useState(() => {
    const storedList = JSON.parse(localStorage.getItem("list")) || [];
    return storedList;
  }); 

  // Loads data from local storage
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("list")) || [];
    setList(storedList);
  }, []);

  // Updates local storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
}, [list]); // Indicates that this effect should re-run whenever the groceries state changes

  // Sets input value
  const [inputValue, setInputValue] = useState(""); 

  // Grabs new input value
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // event = onChange, target = new input, value = input text
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
  }

  // Makes "Enter" key equal to "+" button
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
        addTask();
    }
  };

  // Adds task to the list
  const addTask = () => {
    if (inputValue.trim() !== "") {
      setList([...list, {id: uuidv4(), task: inputValue}]);
      setInputValue("");
    }
  }

  // Sorts task with undone ones first
  const sort = () => {
    const tasksUndone = list.filter(task => !task.isChecked);
    const tasksDone = list.filter(task => task.isChecked);
    setList([...tasksUndone, ...tasksDone]);
  }

  // Removes task from the list
  const removeTask = (taskId) => {
    setList((prevList) => prevList.filter(task => task.id !== taskId));
  }

  // Handles checkbox states
  const handleCheckboxChange = (taskId) => {
    setList((prevList) => prevList.map(task => task.id === taskId ? { ...task, isChecked: !task.isChecked } : task));
  }

  // Undone task count
  const undoneTasks = list.filter(task => !task.isChecked).length;

  // Removes all tasks
  const purge = () => {
    setList([]);
  }

  return (    
    <div id='all'>
      <div className='divPiece' id='top'>
        <h1>To-Do List</h1>
        <form onSubmit={handleFormSubmit}>
          <label>
            <input type='text' value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyPress} placeholder='New Task'></input>
          </label>
          <button id='buttonAdd' type='button' onClick={addTask}/>
          <button id='buttonSort' type='button' onClick={() => sort()}/>
          </form>
      </div>
      <div className='divPiece' id='middle'>
        <ul className='taskList'>{list.map((task) => 
          <li key={task.id}>
            <div id='taskNoButton'>
              <input id='checkbox' type='checkbox' checked={task.isChecked} onChange={() => handleCheckboxChange(task.id)}/>
              <span>{task.task}</span>
            </div>
          <button id='buttonRemove' type='button' onClick={() => removeTask(task.id)}/>
          </li>
        )}</ul>
      </div>
      <div className='divPiece' id='bottom'>
        <p>Tasks left: {undoneTasks}</p>
        <button id='buttonPurge' type='button' onClick={() => purge()}/>
      </div>
    </div>
  )
}

export default List;