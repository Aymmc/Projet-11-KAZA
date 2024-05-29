import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../home/data.json';

function TemplatePhoto() {
  const { id } = useParams(); 


    // Filtrer la photo correspondante à l'ID et la mettre à jour dans l'état
    const item = jsonData.find(item => item.id === id);

  return (
    <div>
     
        <div>
            <img src= {item.cover}/>
          <h2>{item.title}</h2>
          <p>{item.location}</p>
          <p>{item.name} NAME</p>
          <p>{item.tags}</p>
          <p>{item.description}</p>
          <p>{item.equipments}</p>
          <p><img src= {item.pictures}/></p>
        </div>
    </div>
  );
}

export default TemplatePhoto;
