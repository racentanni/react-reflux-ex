// TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from './store';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (todo) => {
    const updatedTodo = { ...todo, text: 'Updated text' }; // Example update
    dispatch(updateTodo(updatedTodo));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleUpdate(todo)}>Update</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;