import unittest
from backend.models.trend_model import predict_trend

class TestTrendModel(unittest.TestCase):
    def test_predict_trend(self):
        result = predict_trend("AAPL")
        self.assertIn('predicted_value', result)

if __name__ == '__main__':
    unittest.main()
