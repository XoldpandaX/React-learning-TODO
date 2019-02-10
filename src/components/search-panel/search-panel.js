import React from 'react';

import ItemStatusFilter from '../item-status-filter';

import './search-panel.css';

const SearchPanel = ({ findTodo, changeFilter }) => {
  const searchText = 'search';
  const searchStyle = {
    fontSize: '25px'
  };
  
  const onChange = ({ target: { value } }) => {
    findTodo(value);
  };
  
  return (
    <div className='search-panel'>
      <input
        type="text"
        placeholder={ searchText }
        style={ searchStyle }
        onChange={ onChange }
      />
      <ItemStatusFilter
        onFilterChange={ changeFilter }
      />
    </div>
  );
};

export default SearchPanel;
