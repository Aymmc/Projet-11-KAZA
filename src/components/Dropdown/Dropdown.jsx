import React, { useState, useRef } from 'react';
import './Dropdown.css';
import ArrowBack from './arrow-back.svg';

function Dropdown({ title, content, className, className2 }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    // Calcule la hauteur du contenu lors de l'ouverture
    if (!isOpen && contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      contentRef.current.style.height = `${contentHeight}px`;
    } else {
      // Réinitialise la hauteur du contenu lors de la fermeture
      contentRef.current.style.height = '0';
    }
  };

  return (
    <article className='dropdowns'>
      <div className={`dropdown-div ${className}`} onClick={toggleDropdown}>
        <h3>{title}</h3>
        <img src={ArrowBack} alt='fleche' className={`${isOpen ? 'animation' : ''}`} />
      </div>
      <div className={`dropdown-content ${className2}`} ref={contentRef}>
        {content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </article>
  );
}

export default Dropdown;
