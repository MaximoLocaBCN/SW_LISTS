
import { createRoot } from 'react-dom/client';

import React from 'react';
import './index.css';
import App from './App';
import { Router, Route } from 'wouter';
import CharacterPage from './pages/CharacterPage';

const container = document.getElementById('root');
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={App} />
      <Route path="/search/:searchTerm" component={App} />
      <Route path="/:attribute/:id" component={CharacterPage} />
    </Router>
  </React.StrictMode>,
  
);