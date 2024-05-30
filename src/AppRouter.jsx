import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import TemplatePhoto from './pages/TemplatePhoto/TemplatePhoto.jsx';
import APropos from './pages/A_Propos/a-propos.jsx';
import NotFound from "./pages/NotFound/NotFound.jsx"
function AppRouter() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/photo/:id" element={<TemplatePhoto />} />
      <Route path='*' element={<NotFound />} />
    </Routes>

  );
}

export default AppRouter;
