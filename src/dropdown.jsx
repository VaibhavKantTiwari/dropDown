import { useState } from "react";
import './dropdown.css';

// recovering the items and the size of the item array 
export const Dropdown = ({ items, size }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [choosedItem, chooseTheItem] = useState(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleItemClick = (item) => {
    chooseTheItem(item);
    setIsOpen(false);
  };
  console.log(size);

  return (
    <>
      <div className="heading">
        <h1>Should you use a dropdown?</h1>
      </div>
{/* creating the effect on hovering the component  */}
      <div className='select-bar' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={isOpen?{borderBottomLeftRadius:'0px', borderBottomRightRadius:'0px'}:{borderRadius:'10px'}}>
        {choosedItem || "Select"} 
        {
          // isOpen && (
          //   <div className='arrow'>^</div>
          // )
          isOpen?<div className='arrow'>^</div>:<div className='flat'>-</div>
        }    
      </div>
      {/* creating the effect on hovering the component  */}
      <div className="middlearea" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>


      {isOpen && (
        // creating the effect on hovering the component
        <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{borderRadius:'5px'}}>
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)} className="dropdown-items"
            style={{
              ...(index===size-1?{borderBottomLeftRadius:'10px', borderBottomRightRadius:'10px'}:{}), 
              ...(index===0?{borderTopRightRadius:'10px', marginTop: '-33px'}:{})}}
            >
              {item}
            </li>
          ))}
        </ul>
      )}



      


    </>
  );
};

