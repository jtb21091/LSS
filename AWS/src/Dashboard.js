import React, { useState } from 'react';

function Dashboard() {
  const [totalDefects, setTotalDefects] = useState('');
  const [totalUnits, setTotalUnits] = useState('');
  const [opportunitiesPerUnit, setOpportunitiesPerUnit] = useState('');
  const [results, setResults] = useState(null);

  const calculateMetrics = () => {
    const defects = parseInt(totalDefects, 10);
    const units = parseInt(totalUnits, 10);
    const opportunities = parseInt(opportunitiesPerUnit, 10);
    const totalOpportunities = units * opportunities;
    const dpmo = (defects / totalOpportunities) * 1_000_000;
    const sigmaLevel = 1.5 + (5.0 - Math.log10(dpmo));
    const processYield = 1.0 - defects / totalOpportunities;

    setResults({
      dpmo: dpmo.toFixed(2),
      sigmaLevel: sigmaLevel.toFixed(2),
      processYield: (processYield * 100).toFixed(2),
    });
  };

  return (
    <div>
      <h2>Six Sigma Dashboard</h2>
      <div>
        <label>
          Total Defects:
          <input
            type="number"
            value={totalDefects}
            onChange={(e) => setTotalDefects(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Total Units:
          <input
            type="number"
            value={totalUnits}
            onChange={(e) => setTotalUnits(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Opportunities per Unit:
          <input
            type="number"
            value={opportunitiesPerUnit}
            onChange={(e) => setOpportunitiesPerUnit(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateMetrics}>Calculate</button>
      {results && (
        <div>
          <h3>Results</h3>
          <p>DPMO: {results.dpmo}</p>
          <p>Sigma Level: {results.sigmaLevel}</p>
          <p>Process Yield: {results.processYield}%</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
