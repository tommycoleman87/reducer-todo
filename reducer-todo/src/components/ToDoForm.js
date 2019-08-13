import React from 'react'

const ToDoForm = ({ dispatch, value, input, clearFields }) => {
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <h2> Add a To Do</h2>
                    <input
                        type='text'
                        name='todo'
                        onChange={input}
                        value={value.todo}
                    />
                </div>
                <div>
                    <h2>Pick A Due Date
            </h2>
                    <input type='date' value={value.due} name='due' onChange={input} />
                </div>
                <div>
                    <h2>Select the type of To Do</h2>
                    <div>
                        <input type='radio' name='tag' onChange={input} value='Chores' />
                        <label>Chores</label>
                    </div>
                    <div>
                        <input type='radio' name='tag' onChange={input} value='Social' />
                        <label>Social</label>
                    </div>
                    <div>
                        <input type='radio' name='tag' onChange={input} value='Bills' />
                        <label>Bills</label>
                    </div>
                </div>
                <button onClick={() => {
                    dispatch({ type: 'ADD_TODO', payload: value })
                    clearFields()
                }}>Add ToDo</button>
            </form>
        </div>
    )
}

export default ToDoForm;