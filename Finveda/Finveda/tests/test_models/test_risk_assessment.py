import unittest
from backend.models.risk_assessment import assess_risk

class TestRiskAssessment(unittest.TestCase):
    def test_assess_risk(self):
        result = assess_risk(1500)
        self.assertIn('risk_score', result)

if __name__ == '__main__':
    unittest.main()
