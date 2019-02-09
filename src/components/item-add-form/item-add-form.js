import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddFrom extends Component {
  
  state = {
    inputText: ''
  };
  
  onLabelChange = ({ target: { value } }) => {
    this.setState({ inputText: value });
  };
  
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddNewItem(this.state.inputText);
    
    this.setState({ inputText: '' });
  };
  
  render() {
    return (
      <form
        className='item-add-from'
        onSubmit={ this.onSubmit }
      >
        <input
          type='text'
          placeholder='what needs to be done'
          value={ this.state.inputText }
          onChange={ this.onLabelChange }
        />
        <button className='item-add-from__btn'>add new item</button>
      </form>
    );
  }
}
