import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this path points to the CSS file in the same directory
import App from './App'; // Import App.js from the same directory

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
