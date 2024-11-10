import axios from 'axios';

const API_BASE = 'http://localhost:5000';

export const fetchTrendPrediction = async (data) => {
  const response = await axios.post(`${API_BASE}/predict-trend`, data);
  return response.data;
};

export const fetchRiskAssessment = async (data) => {
  const response = await axios.post(`${API_BASE}/assess-risk`, data);
  return response.data;
};

export const fetchRecommendations = async (data) => {
  const response = await axios.post(`${API_BASE}/get-recommendations`, data);
  return response.data;
};
