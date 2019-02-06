import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  render () {
    const {
      text,
      done,
      important,
      onDeleted,
      clickTodoText,
      clickMarkBtn
    } = this.props;
    
    let classNames = 'todo-list-item';
    
    if (done) { classNames += ' todo-list-item--done' }
    if (important) { classNames += ' todo-list-item--important' }
  
    return (
      <div className={ classNames }>
        <span
          className="todo-list-item__text"
          onClick={ clickTodoText }
        >
          { text }
        </span>
        <div className='todo-list-item__buttons'>
          <button
            type='button'
            onClick={ onDeleted }
          >
            del
          </button>
          <button
            type='button'
            onClick={ clickMarkBtn }
          >
            mark
          </button>
        </div>
      </div>
    )
  }
}
