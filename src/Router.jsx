import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import TemplatePhoto from './pages/TemplatePhoto/TemplatePhoto.jsx';
import About from './pages/About/About.jsx';
import NotFound from "./pages/NotFound/NotFound.jsx"

function Router() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/photo/:id" element={<TemplatePhoto />} />
      <Route path='*' element={<NotFound />} />
    </Routes>

  );
}

export default Router;
