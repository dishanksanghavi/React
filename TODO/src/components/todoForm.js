import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
    const [todo, setTodo] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    function handleTaskInputChange(e) {
        setTodo(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: todo,
        });

        setTodo('');
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
            <>
                <input
                    placeholder='Update your item'
                    value={todo}
                    onChange={handleTaskInputChange}
                    name='text'
                    ref={inputRef}
                    className='todo-input edit'
                />
                <button onClick={handleSubmit} className='todo-button edit'>
                    Update
                </button>
            </>
        ) : (
            <>
                <input
                    placeholder='Add a todo'
                    value={todo}
                    onChange={handleTaskInputChange}
                    name='text'
                    className='todo-input'
                    ref={inputRef}
                />
                <button onClick={handleSubmit} className='todo-button'>
                    Add todo
                </button>
            </>
        )}
        </form>
      );

}
export default TodoForm;