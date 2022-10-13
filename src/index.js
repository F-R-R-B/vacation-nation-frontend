import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderRedirect from './auth/Auth0ProviderRedirect';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderRedirect>
        <App />
      </Auth0ProviderRedirect>
    </Router>
  </React.StrictMode>
);
