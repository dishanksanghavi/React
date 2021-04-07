import React, {useState} from 'react';
import './App.css';
import TodoForm from './components/todoForm';
import Todo from './components/todo';
import TodoList from './components/todoList';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id){
    setTodos(
      todos.map(todo => {
        if (todo.it === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        }
        return todo;
      })
    );

  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id ));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React - TODO</p>
        <TodoForm addTodo={addTodo}></TodoForm>
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}></TodoList>
      </header>
    </div>
  );
}

export default App;
