import Moment from 'react-moment';
export const initialState = {
    todos: [],
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            console.log(action.payload.due)
            return {
                ...state,
                todos: [...state.todos, {item: action.payload.todo, completed: false, id: Date.now(), due: action.payload.due}]
            }
        case 'COMPLETE_TODO': 
            return {
                ...state,
                todos: [...state.todos.filter(item => item.id !== action.payload.id), {...action.payload, completed: !action.payload.completed, date: new Date()}]
            };
        case 'DELETE_COMPLETED':
            return {
                ...state,
                todos: [...state.todos.filter(item => item.completed !== true)]
            }
        default: 
            return state;
    }
}