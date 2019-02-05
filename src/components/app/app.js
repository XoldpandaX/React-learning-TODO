import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
  maxId = 100;
  
  state = {
    todoData: [
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
    ]
  };
  
  deleteTodo = (todoId) => this.setState(({ todoData }) => (
    { todoData: todoData.filter((todo) => todo.id !== todoId) }
  ));
  
  addNewTodo = (text) => this.setState(({ todoData }) => {
    return (
      { todoData:
          [...todoData,
            {
              id: this.maxId++,
              text,
              important: false
            }
          ]
      }
    );
  });
  
  render() {
    const { todoData } = this.state;
    
    return (
      <div className='app-container'>
        <AppHeader />
        <SearchPanel />
        <TodoList
          todos={ todoData }
          onDeleted={ this.deleteTodo }
        />
        <ItemAddForm onAddNewItem={ () => this.addNewTodo('fuck you') }/>
      </div>
    );
  }
}

