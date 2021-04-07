import React from 'react';

function Todo({todo, toggleComplete, removeTodo}) {
    function handleCheckBoxClick(){
        toggleComplete(todo.id);
    }

    function handleRemoveClick(id) {
        removeTodo(todo.id)
    }

    return(
        <div style={{display:'flex'}}>
            <input type='checkbox' onClick={handleCheckBoxClick}></input>
            <li style={{color:'white',textDecoration:todo.complete?'line-through':null}}>
                {todo.task}
            </li>
            <button onClick={handleRemoveClick}>DELETE</button>
        </div>
    );
}

export default Todo;