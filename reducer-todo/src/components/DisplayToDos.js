import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
const DisplayToDos = ({state, dispatch}) => {
   return (<> {state.todos.map((item, index) => {
        return item.completed ?  <div key={index} onClick={() => dispatch({type: 'COMPLETE_TODO', payload: item})} style={{textDecoration: 'line-through'}}><h1>{item.item} - <Moment format="MM/DD">{item.date}</Moment> </h1></div> :  
        <div key={index} onClick={() => dispatch({type: 'COMPLETE_TODO', payload: item})}>{moment(item.due).format('YYYYMMDD') < moment(Date.now()).format('YYYYMMDD')  ? <h1 style={{color: 'red'}}>{item.item}</h1> : <h1>{item.item}</h1>}</div>
         
       })}
       </>
   )
}

export default DisplayToDos;