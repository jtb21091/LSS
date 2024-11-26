import React, { useState } from 'react';

function COPQ() {
  const [costPerDefectUnit, setCostPerDefectUnit] = useState('');
  const [numberOfDefects, setNumberOfDefects] = useState('');

  const calculateTotalCost = () => {
    const costPerUnit = parseFloat(costPerDefectUnit) || 0;
    const defects = parseInt(numberOfDefects, 10) || 0;
    return costPerUnit * defects;
  };

  return (
    <div>
      <h2>Cost of Poor Quality (COPQ)</h2>
      <div>
        <label>
          Cost per Defective Unit ($):
          <input
            type="number"
            value={costPerDefectUnit}
            onChange={(e) => setCostPerDefectUnit(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Number of Defective Units:
          <input
            type="number"
            value={numberOfDefects}
            onChange={(e) => setNumberOfDefects(e.target.value)}
          />
        </label>
      </div>
      <h3>Total COPQ: ${calculateTotalCost().toFixed(2)}</h3>
    </div>
  );
}

export default COPQ;
