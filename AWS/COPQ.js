
import React, { useState } from 'react';

function COPQ() {
  const [internalFailureCost, setInternalFailureCost] = useState('');
  const [externalFailureCost, setExternalFailureCost] = useState('');
  const [appraisalCost, setAppraisalCost] = useState('');
  const [preventionCost, setPreventionCost] = useState('');

  const calculateTotalCOPQ = () => {
    const internal = parseFloat(internalFailureCost) || 0;
    const external = parseFloat(externalFailureCost) || 0;
    const appraisal = parseFloat(appraisalCost) || 0;
    const prevention = parseFloat(preventionCost) || 0;
    return internal + external + appraisal + prevention;
  };

  return (
    <div>
      <h2>Cost of Poor Quality (COPQ)</h2>
      <div>
        <label>
          Internal Failure Cost:
          <input
            type="number"
            value={internalFailureCost}
            onChange={(e) => setInternalFailureCost(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          External Failure Cost:
          <input
            type="number"
            value={externalFailureCost}
            onChange={(e) => setExternalFailureCost(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Appraisal Cost:
          <input
            type="number"
            value={appraisalCost}
            onChange={(e) => setAppraisalCost(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Prevention Cost:
          <input
            type="number"
            value={preventionCost}
            onChange={(e) => setPreventionCost(e.target.value)}
          />
        </label>
      </div>
      <h3>Total COPQ: ${calculateTotalCOPQ().toFixed(2)}</h3>
    </div>
  );
}

export default COPQ;
