import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../home/data.json';
import Star from "../../components/Star/Star.jsx";
import Dropdown from '../../components/Dropdown/Dropdown.jsx';
import Arrow from '../../components/Dropdown/arrow-back.svg';
import './TemplatePhoto.css';

function TemplatePhoto() {
  const { id } = useParams();
  const item = jsonData.find(item => item.id === id);

  // Initialisation de l'état pour l'index de l'image actuelle
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gestionnaires d'événements pour les flèches
  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? item.pictures.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === item.pictures.length - 1 ? 0 : prevIndex + 1));
  };

  const dropdowns = [
    { title: 'Description', content: [item.description] },
    {
      title: 'Equipement', content: [item.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))]
    },
  ];
  return (
    <>
      <section>
        <article className='TemplatePhoto'>
          <div className='DivImg'>
            <img src={item.pictures[currentIndex]} className='cover' alt="Current accommodation" />
            <img src={Arrow} className='arrow arrowleft' alt="Previous" onClick={handlePrevClick} />
            <img src={Arrow} className='arrow arrowright' alt="Next" onClick={handleNextClick} />
            <p>
              {currentIndex + 1} / {item.pictures.length}
            </p>
          </div>
          <div className='DivTitreAuthor'>
            <div className='DivTitreLocation'>
              <div className='DivTitre'>
                <h2>{item.title}</h2>
              </div>
              <div className='DivLocation'>
                <p>{item.location}</p>
              </div>
              <div className='DivTag'><ul>
                {item.tags.map((tag, index) => (
                  <li key={index} className='tag'>{tag}</li>
                ))}
              </ul>
              </div>
            </div>
            <div className='DivAuthorStar'>
              <div className='DivAuthor'>
                <p>{item.host.name}</p>
                <div className='DivImgAuthor'>
                  <img src={item.host.picture} alt={item.host.name} />

                </div>
              </div>
              <div className='DivStar'>
                <Star rating={item.rating} />
              </div>
            </div>
          </div>
          <div className='DropdownPhoto'>
            {dropdowns.map((dropdown, index) => (
              <Dropdown key={index} title={dropdown.title} content={dropdown.content} className2="dropdown-content2" className="dropdown-div2" />
            ))}

          </div>
        </article>
      </section>
    </>
  );
}

export default TemplatePhoto;
