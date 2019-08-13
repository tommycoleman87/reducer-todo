import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
const DisplayToDos = ({ state, dispatch }) => {
    return (<> {state.todos.map((item, index) => {
        return item.completed ? <div key={index} onClick={() => dispatch({ type: 'COMPLETE_TODO', payload: item })} style={{ textDecoration: 'line-through' }}><h4>{item.tag} - {item.item} - <Moment format="MM/DD">{item.date}</Moment> </h4></div> :
            <div key={index} onClick={() => dispatch({ type: 'COMPLETE_TODO', payload: item })}>{moment(item.due).format('YYYYMMDD') < moment(Date.now()).format('YYYYMMDD') ? <h4 style={{ color: 'red' }}>{item.tag} - {item.item}</h4> : <h4>{item.tag} - {item.item}</h4>}</div>

    })}
    </>
    )
}

export default DisplayToDos;