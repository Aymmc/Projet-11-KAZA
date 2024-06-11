import React from 'react';
import PhotoCards from '../../components/PhotosCards/PhotosCards';
import "./Home.css"
// import ChezVous from './IMG.png'
function Home() {
  return (
    <>
      <div className='ChezVous'>
        <div className='ChezVous-content'>
        </div>
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <PhotoCards />
    </>
  );
}

export default Home;
