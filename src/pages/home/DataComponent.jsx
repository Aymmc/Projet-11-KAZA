import React from 'react';
import jsonData from './data.json';
import { Link } from 'react-router-dom';
import "./DataComponent.css"
function DataComponent() {
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

export default DataComponent;
