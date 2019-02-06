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
    ]
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
  
  todosToDone = () => this.state.todoData.filter((todo) => !todo.done).length;
  
  todosDone = () => this.state.todoData.filter((todo) => todo.done).length;
  
  isAllTodosDone = () => this.todosDone() === this.state.todoData.length;
  
  render() {
    const { todoData } = this.state;
    
    return (
      <div className='app-container'>
        <AppHeader
          todo={ this.todosToDone() }
          done={ this.todosDone() }
          isAllTodosDone={ this.isAllTodosDone() }
        />
        <SearchPanel />
        <TodoList
          todos={ todoData }
          onDeleted={ this.deleteTodo }
          toggleDone={ this.toggleDone }
          toggleMark={ this.toggleMark }
        />
        <ItemAddForm onAddNewItem={ () => this.addNewTodo('fuck you') }/>
      </div>
    );
  }
}

