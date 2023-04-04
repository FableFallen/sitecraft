import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import MainPage from './components/MainPage';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);


