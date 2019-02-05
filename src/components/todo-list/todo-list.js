import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted }) => {
  const listElements = todos.map((todo) => {
    const { id, ...todoProps } = todo;
    
    return (
      <li
        className='todo-list__li-el'
        key={ id }
      >
        <TodoListItem
          { ...todoProps }
          onDeleted={ () => onDeleted(id) }
        />
      </li>
    )
  });
  
  return (
    <div>
      <ul className="todo-list">
        { listElements }
      </ul>
    </div>
  );
};

export default TodoList;
