import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, toggleDone, toggleMark, onDeleted }) => {
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
          clickTodoText={ () => toggleDone(id) }
          clickMarkBtn={ () => toggleMark(id) }
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
