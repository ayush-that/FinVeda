from flask import Flask, request, jsonify
from models.stock_price_prediction.data_preprocessing import fetch_stock_data, preprocess_data
from models.stock_price_prediction.lstm_model import build_lstm_model

# Initialize Flask app
app = Flask(__name__)

# Load the trained model
model = build_lstm_model((60, 1))  # Ensure the model is built
model.load_weights('models/stock_price_prediction/model_weights.h5')  # Load saved model weights

# API endpoint for stock price prediction
@app.route('/predict', methods=['POST'])
def predict_stock():
    # Extract data from request (e.g., stock ticker symbol)
    ticker = request.json['ticker']
    
    # Fetch and preprocess the stock data
    data = fetch_stock_data(ticker)
    X, y, scaler = preprocess_data(data)
    
    # Predict the stock price using the LSTM model
    prediction = model.predict(X[-1].reshape(1, X.shape[1], 1))
    prediction = scaler.inverse_transform(prediction)
    
    # Return the prediction as a JSON response
    return jsonify({'predicted_stock_price': prediction[0][0]})

# Run the app
if __name__ == "__main__":
    app.run(debug=True)
