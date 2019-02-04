import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };
  
  onTextClick = () => this.setState({ done: !this.done });
  
  render () {
    const { text } = this.props;
    const { done, important } = this.state;
    
    let classNames = 'todo-list-item';
    if (done) { classNames = `${ classNames } todo-list-item--done` }
    
    const spanStyle = important ? { color: 'tomato' } : { color: 'black' };
  
    return (
      <div
        className={ classNames }
        onClick={ this.onTextClick }
      >
        <span
          className="todo-list-item__text"
          style={ spanStyle }
        >
          { text }
        </span>
        <div className='todo-list-item__buttons'>
          <button type='button'>del</button>
          <button type='button'>mark</button>
        </div>
      </div>
    )
  }
}
