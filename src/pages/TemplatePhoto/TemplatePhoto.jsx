import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../home/data.json';
import Star from "../../components/Star/Star.jsx"
import Dropdown from '../../components/Dropdown/Dropdown.jsx';
import './TemplatePhoto.css'
function TemplatePhoto() {
  const { id } = useParams();


  // Filtrer la photo correspondante à l'ID et la mettre à jour dans l'état
  const item = jsonData.find(item => item.id === id);
  const dropdowns = [
    { title: 'Description', content: [item.description] },
    { title: 'Equipement', content: [item.equipments.map((equipment, index) => (
      <li key={index} >{equipment}</li>
    ))] },
  ];
  return (
    <>
      <section>
        <article className='TemplatePhoto'>
          <div className='DivImg'>
            <img src={item.cover} />
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
          <Dropdown key={index} title={dropdown.title} content={dropdown.content} className2="dropdown-content2" className="dropdown-div2"/>
        ))}

          </div>
        </article>
      </section>
    </>
  );
}

export default TemplatePhoto;
