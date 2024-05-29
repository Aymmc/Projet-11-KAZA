import React from 'react';
import "./Star.css";
import Pleine from "./Pleine.svg";
import Vide from "./Vide.svg";
function StarRating({ rating }) {
  const stars = [];

  // Crée un tableau de 5 étoiles
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      // Si l'indice est inférieur à la note, affiche une étoile pleine
      stars.push(<span key={i}><img src={Pleine}/></span>);
    } else {
      // Sinon, affiche une étoile vide
      stars.push(<span key={i}><img src={Vide}/></span>);
    }
  }

  return (
   <>
      {stars}
    </>
  );
}
export default StarRating