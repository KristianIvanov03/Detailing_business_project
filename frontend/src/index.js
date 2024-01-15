import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTools, faCubes, faSmile } from '@fortawesome/free-solid-svg-icons';
import {AuthContextProvider} from './context/AuthContext'

library.add(faTools, faCubes, faSmile);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);


