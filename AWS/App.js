
import React from 'react';
import Dashboard from './components/Dashboard';
import COPQ from './components/COPQ';
import './App.css';

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
