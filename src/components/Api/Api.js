import React, { createContext, useContext, useState, useEffect } from 'react';

// Crée un contexte pour les données JSON
const JsonDataContext = createContext(null);

// Hook personnalisé pour utiliser le contexte des données JSON
export function useJsonDataContext() {
  return useContext(JsonDataContext);
}

// Composant fournisseur de données JSON
export function JsonDataProvider({ children }) {
  // État local pour stocker les données JSON
  const [jsonData, setJsonData] = useState(null);

  useEffect(function() {
    // Effet déclenché au montage pour récupérer les données JSON via fetch
    fetch(`${process.env.PUBLIC_URL}/data.json`)
      .then(response => response.json()) // Convertit la réponse en JSON
      .then(data => setJsonData(data)) // Met à jour l'état local avec les données JSON
      .catch(error => console.error('Erreur lors du fetch :', error)); // Gère les erreurs potentielles de fetch
  }, []); // Le tableau vide [] indique que cet effet ne dépend d'aucune valeur et ne doit être exécuté qu'une seule fois, équivalent à componentDidMount
  
  // Rendu du composant fournisseur de contexte avec les données JSON et la fonction de mise à jour
  return (
    <JsonDataContext.Provider value={{ jsonData, setJsonData }}>
      {children} {/* Rend les composants enfants enveloppés avec ce contexte */}
    </JsonDataContext.Provider>
  );
};
