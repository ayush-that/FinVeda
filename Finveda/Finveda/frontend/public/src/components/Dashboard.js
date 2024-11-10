import React, { useState } from 'react';
import { fetchTrendPrediction, fetchRiskAssessment, fetchRecommendations } from '../services/api';
import Chart from './Chart';
import Recommendation from './Recommendation';

const Dashboard = () => {
  const [prediction, setPrediction] = useState(null);
  const [risk, setRisk] = useState(null);
  const [recommendations, setRecommendations] = useState(null);

  const handleAnalyze = async () => {
    const trendData = await fetchTrendPrediction({ asset: 'AAPL' });
    setPrediction(trendData);

    const riskData = await fetchRiskAssessment({ investment: 500 });
    setRisk(riskData);

    const recs = await fetchRecommendations({ risk_tolerance: 'Medium' });
    setRecommendations(recs);
  };

  return (
    <div>
      <button onClick={handleAnalyze}>Analyze</button>
      <Chart data={prediction} />
      <Recommendation data={recommendations} />
    </div>
  );
};

export default Dashboard;
