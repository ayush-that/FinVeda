import React from 'react';

const Chart = ({ data }) => {
  if (!data) return null;
  return (
    <div>
      <h2>Trend Prediction</h2>
      <p>Predicted Value: {data.predicted_value}</p>
    </div>
  );
};

export default Chart;
