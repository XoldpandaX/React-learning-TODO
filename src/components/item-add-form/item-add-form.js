import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddFrom extends Component {
  
  render() {
    const { onAddNewItem } = this.props;
    
    return (
      <div className='item-add-from'>
        <button
          className='item-add-from__btn'
          onClick={ onAddNewItem }
        >
          add new item
        </button>
      </div>
    );
  }
}
