import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {
  const listElements = todos.map((todo) => {
  
    const { id, ...todoProps } = todo;
    
    return (
      <li
        className='todo-list__li-el'
        key={ id }
      >
        <TodoListItem { ...todoProps } />
      </li>
    )
  });
  
  return (
    <ul className="todo-list">
      { listElements }
    </ul>
  );
};

export default TodoList;
