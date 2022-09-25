import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './styles.css';
import { useLocalStorage } from "./useLocalStorage";


const App = () => {
  const [todos, setTodos] = useLocalStorage([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm
          saveTodo={todoText => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            setTodos([...todos, trimmedText]);
          }
          localStorage.setItem(trimmedText, trimmedText);
        }}
     />
      <TodoList todos={todos}
        deleteTodo={todoIndex => {
          const newTodos = todos.filter((el, index) => index !== todoIndex);
          setTodos(newTodos);
          localStorage.removeItem(todos[todoIndex])
        }}/>
    </div>
  );
};


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
