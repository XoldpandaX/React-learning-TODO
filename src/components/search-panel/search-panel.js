import React from 'react';

import ItemStatusFilter from '../item-status-filter';

import './search-panel.css';

const SearchPanel = () => {
  const searchText = 'search';
  const searchStyle = {
    fontSize: '25px'
  };
  
  return (
    <div className='search-panel'>
      <input style={ searchStyle } type="text" placeholder={ searchText } />
      <ItemStatusFilter />
    </div>
  );
};

export default SearchPanel;
