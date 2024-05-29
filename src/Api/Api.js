import React, { Component, useState, useEffect } from 'react';

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('annonce.json');
      const jsonResponse = await response.json();
      this.setState({
        isLoaded: true,
        items: jsonResponse.adverts // Assurez-vous que c'est la bonne clé pour vos données
      });
    } catch (error) {
      console.log("Erreur lors de la récupération des données : ", error);
      this.setState({
        isLoaded: true,
        error: error
      });
    }
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Api;
