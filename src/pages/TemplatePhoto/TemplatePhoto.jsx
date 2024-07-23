import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
// import jsonData from '../home/data.json';
import Star from "../../components/Star/Star.jsx";
import Dropdown from '../../components/Dropdown/Dropdown.jsx';
import Carrousel from '../../components/Carrousel/Carrousel.jsx';
import './TemplatePhoto.css';
import { useJsonDataContext } from '../../components/Api/Api.js';

function TemplatePhoto() {
  const { jsonData, error } = useJsonDataContext();
  const { id } = useParams();
  if (error) {
    return <p>Erreur lors du chargement des données.</p>;
  }
  if (!jsonData) {
    return <p>Loading...</p>;
  }
  const item = jsonData.find(item => item.id === id);
  if (!item) {
    return <Navigate to="*" />;
  }
  // Gestionnaires d'événements pour les flèches
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
       <Carrousel item={item} />
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
