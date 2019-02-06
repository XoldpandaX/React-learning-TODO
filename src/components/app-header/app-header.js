import React from 'react';

const AppHeader = ({ todo, done, isAllTodosDone }) => {
  const todoStatusDescription = isAllTodosDone
    ? <h2>all { done } todos done, congratulations !!!</h2>
    : <h2>{ todo } more to do, { done } done</h2>;
    
  
  return (
    <div className='app-header'>
      <h1>Todo List</h1>
      { todoStatusDescription }
    </div>
  );
};

export default AppHeader;

