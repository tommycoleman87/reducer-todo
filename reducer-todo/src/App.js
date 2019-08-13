import React, { useState, useReducer } from 'react';
import ToDoForm from './components/ToDoForm';
import DisplayToDos from './components/DisplayToDos';
import './App.css';
import { initialState, todoReducer } from './reducers/todoReducer';

function App() {
  const [newTodo, setNewToDo] = useState({ todo: '', due: '', tag: '' });
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleInput = (e) => {
    let name = e.target.name;
    let eValue = e.target.value;
    setNewToDo({ ...newTodo, [name]: eValue })
  }

  const clearValues = () => {
    setNewToDo({ todo: '', due: '' })
  }
  return (
    <div className="App">
      <h1>Tommy's To Do List</h1>
      <DisplayToDos state={state} dispatch={dispatch} />
      <ToDoForm dispatch={dispatch} input={(e) => handleInput(e)} value={newTodo} clearFields={() => clearValues()} />
      <button onClick={() => dispatch({ type: 'DELETE_COMPLETED' })}>Clear Completed</button>
    </div>
  );
}

export default App;
