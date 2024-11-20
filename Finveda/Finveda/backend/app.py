from flask import Flask, jsonify, request
from models.trend_model import predict_trend
from models.risk_assessment import assess_risk
from models.recommendation import get_recommendations

app = Flask(__name__)

@app.route('/predict-trend', methods=['POST'])
def trend_prediction():
    data = request.json
    predictions = predict_trend(data['asset'])
    return jsonify(predictions)

@app.route('/assess-risk', methods=['POST'])
def risk_assessment():
    data = request.json
    risk_score = assess_risk(data['investment'])
    return jsonify(risk_score)

@app.route('/get-recommendations', methods=['POST'])
def recommendations():
    data = request.json
    recs = get_recommendations(data['preferences'])
    return jsonify(recs)

if __name__ == '__main__':
    app.run(debug=True)
