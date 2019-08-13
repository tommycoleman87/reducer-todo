import React, {useState, useReducer} from 'react';
import ToDoForm from './components/ToDoForm';
import DisplayToDos from './components/DisplayToDos';
import './App.css';
import {initialState, todoReducer } from './reducers/todoReducer';

function App() {
  const [newTodo, setNewToDo] = useState({todo: '', due: ''});
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleInput = (e) => {
    let name = e.target.name;
    let eValue = e.target.value;
    setNewToDo({...newTodo, [name]: eValue})
  }
  return (
    <div className="App">
      <DisplayToDos state={state} dispatch={dispatch}/>
      <ToDoForm dispatch={dispatch} input={(e) => handleInput(e)} value={newTodo} />
      <button onClick={() => dispatch({type: 'DELETE_COMPLETED'})}>Clear Completed</button>
    </div>
  );
}

export default App;
