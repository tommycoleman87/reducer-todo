import React from 'react'

const ToDoForm = ({dispatch, value, input}) => {
    return (
        <div>
        <form onSubmit={(e) => e.preventDefault()}>
        <input
        type='text'
        name='todo'
        onChange={input}
        value={value.todo}
        />
        <input type='date' value={value.due} name='due' onChange={input} />
        <button onClick={() => dispatch({type: 'ADD_TODO', payload: value})}>Add ToDo</button>
        </form>
        </div>
    )
}

export default ToDoForm;