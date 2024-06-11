import './App.css';
import Router from './Router';
import React from 'react';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
}

export default App;
