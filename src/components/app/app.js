import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

import './app.css';

const todoData = [
  {
    id: 1,
    text: 'Drink Coffe',
    important: false
  },
  {
    id: 2,
    text: 'Build React App',
    important: true
  },
  {
    id: 3,
    text: 'Go To The Shop',
    important: false
  }
];

const App = () => {
  return (
    <div className='app-container'>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={ todoData } />
    </div>
  );
};

export default App;
