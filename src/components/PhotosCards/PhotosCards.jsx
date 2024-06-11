import React from 'react';
import { Link } from 'react-router-dom';
import "./PhotosCards.css";
import { useJsonDataContext } from '../Api/Api.js';

function PhotoCards() {
  const { jsonData, error } = useJsonDataContext();

  if (error) {
    return <p>Erreur lors du chargement des données.</p>;
  }

  if (!jsonData) {
    return <p>Loading...</p>;
  }

  return (
    <section className='section-carte'>
      <div className='main-carte'>
        {jsonData.map((item, index) => (
          <article className="carte" key={index}>
            <div className='radiant'>
              <Link to={`photo/${item.id}`}>
                <img
                  src={item.cover}
                  alt={item.title}
                  id={item.id}
                />
              </Link>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PhotoCards;
