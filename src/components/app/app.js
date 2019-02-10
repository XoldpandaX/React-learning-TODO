import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
  maxId = 100;
  
  createTodoItem = (text) => ({
    id: this.maxId++,
    text,
    done: false,
    important: false
  });
  
  state = {
    todoData: [
      this.createTodoItem('Say hi to the World'),
      this.createTodoItem('Make a kimchi'),
      this.createTodoItem('Finish studying'),
      this.createTodoItem('Drink cup of coffe'),
    ],
    term: ''
  };
  
  immutableUpdateStateArray = (stateData, updateItemIdx, newItem) => ([
    ...stateData.slice(0, updateItemIdx),
    newItem,
    ...stateData.slice(updateItemIdx + 1)
  ]);
  
  toggleDone = (todoId) => this.setState(({ todoData }) => {
    const idx = todoData.findIndex((el) => el.id === todoId);
    const oldTodo = todoData[idx];
    const updateTodo = { ...oldTodo, done: !oldTodo.done };
    
    return ({
      todoData: this.immutableUpdateStateArray(todoData, idx, updateTodo)
    });
  });
  
  toggleMark = (todoId) => this.setState(({ todoData }) => {
    const idx = todoData.findIndex((todo) => todo.id === todoId);
    const oldTodo = todoData[idx];
    const updatedTodo = { ...oldTodo, important: !oldTodo.important };
    
    return ({
      todoData: this.immutableUpdateStateArray(todoData, idx, updatedTodo)
    });
  });
  
  deleteTodo = (todoId) => this.setState(({ todoData }) => (
    { todoData: todoData.filter((todo) => todo.id !== todoId) }
  ));
  
  addNewTodo = (text) => this.setState(({ todoData }) => (
    { todoData: [...todoData, this.createTodoItem(text)] }
  ));
  
  setTerm = (searchTerm) => this.setState({ term: searchTerm });
  
  search = (todoData, term) => {
    if (!term || term === 'All') {
      return todoData;
    }
    
    switch (term) {
      case 'Active':
        return todoData.filter((todo) => todo.important);
      case 'Done':
        return todoData.filter((todo) => todo.done);
      default:
        return todoData.filter((todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = term.toLowerCase();
    
          return todoText.indexOf(searchText) !== - 1;
        });
    }
  };
  
  render() {
    const { todoData, term } = this.state;
    
    const visibleTodoData = this.search(todoData, term);
    const todoDone = todoData.filter((todo) => todo.done).length;
    const todoLeft = todoData.length - todoDone;
    const isAllTodoDone = todoData.length === todoDone;
    const isAddFormVisible = !this.state.term || this.state.term === 'All';
    
    return (
      <div className='app-container'>
        <AppHeader
          todo={ todoLeft }
          done={ todoDone }
          isAllTodoDone={ isAllTodoDone }
        />
        <SearchPanel
          findTodo={ this.setTerm }
          changeFilter={ this.setTerm }
        />
        <TodoList
          todos={ visibleTodoData }
          onDeleted={ this.deleteTodo }
          toggleDone={ this.toggleDone }
          toggleMark={ this.toggleMark }
        />
        <ItemAddForm
          isVisible={ isAddFormVisible }
          onAddNewItem={ this.addNewTodo }
        />
      </div>
    );
  }
}

