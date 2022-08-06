import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserContextProvider } from './context/userContext';
import {BrowserRouter} from 'react-router-dom'

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>
);
