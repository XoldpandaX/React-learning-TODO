import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {
  state = {
    filter: 'All'
  };
  
  filterTypes = [
    {
      id: '1q',
      type: 'All'
    },
    {
      id: '1w',
      type: 'Active'
    },
    {
      id: '1e',
      type: 'Done'
    },
  ];
  
  activeFilterStyle = (stateFilter, filter) => stateFilter === filter
    ? { backgroundColor: 'hotpink', fontWeight: 'bold' }
    : null;
  
  changeFilter = (e) => {
    const { innerText } = e.target;
    this.setState({ filter: innerText });
    
    this.props.onFilterChange(innerText);
  };
  
  buttons = () => {
    const { filter } = this.state;
    
    return this.filterTypes.map((filterType) => {
      return (
        <button
          type='button'
          style={ this.activeFilterStyle(filter, filterType.type) }
          key={ filterType.id }
          onClick={ this.changeFilter }
        >
          { filterType.type }
        </button>
      );
    });
  };
  
  render() {
    return <div>{ this.buttons() }</div>
  }
}

