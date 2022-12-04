import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import List from './/Page/list'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/list' element={<List />} />
          <Route path='/' element={<App /> } />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);