import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div>
        <button type='button'>All</button>
        <button  type='button'>Active</button>
        <button  type='button'>Done</button>
      </div>
    );
  }
}
