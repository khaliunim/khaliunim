import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import List from './/Page/list'
import Movie from './Page/movie'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/list' element={<List />} />
          <Route path='/list/movie/:id' element={<Movie />} />
          <Route path='/' element={<App /> } />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);