import React from 'react';
import Dashboard from './Dashboard'; // Ensure the path points to Dashboard.js
import COPQ from './COPQ'; // Ensure the path points to COPQ.js
import './index.css'; // Import global styles if necessary

function App() {
  return (
    <div className="App">
      <h1>Six Sigma App</h1>
      <Dashboard />
      <COPQ />
    </div>
  );
}

export default App;
