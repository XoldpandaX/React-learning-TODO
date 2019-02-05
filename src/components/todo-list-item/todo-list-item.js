import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };
  
  onTextClick = () => this.setState((state) => ({ done: !state.done }));
  markImportant = () => this.setState((state) => ({ important: !state.important }));
  
  render () {
    const { text, onDeleted } = this.props;
    const { done, important } = this.state;
    
    let classNames = 'todo-list-item';
    
    if (done) { classNames += ' todo-list-item--done' }
    if (important) { classNames += ' todo-list-item--important' }
  
    return (
      <div className={ classNames }>
        <span
          className="todo-list-item__text"
          onClick={ this.onTextClick }
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
            onClick={ this.markImportant }
          >
            mark
          </button>
        </div>
      </div>
    )
  }
}
