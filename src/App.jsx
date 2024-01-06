import React from 'react';
import { Dropdown } from './dropdown';
import './App.css';



const App = () => {
  // items in the dropdown list
  const dropdownItems = ['Yes', 'Probably not', 'not sure', 'need to learn', 'another method', 'easy one'];

  return (
    <div className='main-box'>
      {/* sending the items array and the size of the item array */}
      <Dropdown items={dropdownItems} size = {dropdownItems.length} />
    </div>
  );
};

export default App;