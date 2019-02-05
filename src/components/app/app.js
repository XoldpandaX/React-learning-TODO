import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
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
  
  deleteTodo = (todoId) => this.setState((state) => (
    { todoData: state.todoData.filter((todo) => todo.id !== todoId) }
  ));
  
  addNewTodo = () => this.setState((state) => {
    return (
      { todoData:
          [...state.todoData,
            {
              id: state.todoData.length + 1,
              text: 'hulina',
              important: true
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
        <ItemAddForm onAddNewItem={ this.addNewTodo }/>
      </div>
    );
  }
}

