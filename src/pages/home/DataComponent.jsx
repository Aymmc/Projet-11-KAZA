import React from 'react';
import jsonData from './data.json';
import { Link } from 'react-router-dom';
import "./DataComponent.css"
function DataComponent() {
  return (
    <section className='section-carte'>
      <div className='main-carte'>
        {jsonData.map((item, index) => (
          <div className="carte" key={index}>
            <Link to={`photo/${item.id}`}>
              <img
                src={item.cover}
                alt={item.title}
                id={item.id}
              />
            </Link>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DataComponent;
