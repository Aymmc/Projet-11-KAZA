import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { JsonDataProvider } from './components/Api/Api';
const root = ReactDOM.createRoot(document.getElementById('root'));

 
root.render(

    <BrowserRouter>
    <JsonDataProvider>
    <App />
   </JsonDataProvider>
    </BrowserRouter>

);

