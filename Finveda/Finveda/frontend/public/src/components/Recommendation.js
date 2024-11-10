import React from 'react';

const Recommendation = ({ data }) => {
  if (!data) return null;
  return (
    <div>
      <h2>Recommendations</h2>
      <ul>
        {data.recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
