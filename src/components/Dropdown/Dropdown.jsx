import React, { useState } from 'react';
import './Dropdown.css';
import ArrowBack from './arrow-back.svg'
function Dropdown({ title, content , className , className2}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className='dropdown'>
    <div className={`dropdown ${className}`}>
      <h3>{title}</h3>
      <img src={ArrowBack} alt='fleche'  onClick={toggleDropdown} />
      </div>
      {isOpen && (
        <div className={`${className2} ${isOpen ? 'show' : ''}`}>
          {content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}

        </div>
      )}
    </article>
  );
}
export default Dropdown