// App.js
import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
