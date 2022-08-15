import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodo] = useState([
    {task: "Take out the bins", priority: "high"},
    {task: "MOT", priority: "low"},
    {task: "Clean stuff", priority: "high"},
  ])
  const [newTodo, setNewTodo] = useState("");
  const [newPrio, setNewPrio] = useState("");

  const todoNodes = todos.map((todo, index) => {
    return <li key={index}>
        <span>{todo.task}, {todo.priority}</span>
      {/* {todo.isPriority ? <span classname="priority"> high</span> : <button onClick={() => {priorityTask(index)}}>Low</button> } */}
    </li>
  })

  const handleTaskInput = (task) => {
    setNewTodo(task.target.value)
  }

  const handlePrioInput = (priority) => {
    setNewPrio(priority.target.value)
  }

  const saveNewTodo = (task) => {
    task.preventDefault();
    const copyTask = [...todos]
    copyTask.push({task: newTodo, priority: newPrio})
    setTodo(copyTask);
    setNewTodo("")
  }

  // const priorityTask = (index) => {
  //   const copyTask = [...todos];
  //   copyTask[index].priority = "low";
  //   setTodo(copyTask)
  // }


  return (
    <div className="App">

    <h1>Todo List</h1>
    <hr></hr>

    <ul>
      {todoNodes}
    </ul>

    <form onSubmit={saveNewTodo}>
      <label htmlFor="new-task">Add new task:</label>
      <input id="new-task" type="text" value={newTodo} onChange={handleTaskInput}/>
      <input type="radio" name="prio" value="High" onChange={handlePrioInput}/>High
      <input type="radio" name="prio" value="Low" onChange={handlePrioInput}/>Low
      <input type="submit" value="Save New Task"/>
    </form>
    

  </div>
  );
}

export default App;
