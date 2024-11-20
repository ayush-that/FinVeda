# Stock Price Prediction Module

This module provides tools for building and deploying machine learning models for stock price prediction using Long Short-Term Memory (LSTM) networks. It includes data fetching, preprocessing, model training, evaluation, and a Flask API endpoint to predict stock prices based on the latest data.

## Table of Contents
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
  - [Training the Model](#training-the-model)
  - [Making Predictions](#making-predictions)
  - [API Integration](#api-integration)
- [Components](#components)

---

## Folder Structure

The structure of the `stock_price_prediction` module:

```
models/
└── stock_price_prediction/
    ├── __init__.py
    ├── data_preprocessing.py      # Data fetching and preprocessing
    ├── lstm_model.py              # LSTM model construction
    ├── train_model.py             # Model training script
    ├── evaluate_model.py          # Model evaluation
    └── flask_api.py               # Flask API for real-time predictions
```

---

## Features

- **Data Preprocessing**: Fetches historical stock data and preprocesses it using `MinMaxScaler`.
- **Model Building**: Builds a custom LSTM model for stock price prediction.
- **Training and Evaluation**: Trains the model and evaluates it on test data.
- **Flask API**: A REST API for real-time stock price prediction.
- **JavaScript Integration**: Frontend JavaScript to call the Flask API and display predictions.

---

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ayush-that/FinVeda.git
   cd FinVeda
   ```

2. **Install Dependencies**:
   Install the required libraries:
   ```bash
   pip install pandas numpy scikit-learn tensorflow yfinance flask
   ```

3. **Run the Flask API**:
   Start the API server:
   ```bash
   python models/stock_price_prediction/flask_api.py
   ```
   The API will be available at `http://localhost:5000/predict`.

---

## Usage

### Training the Model

1. **Preprocess Data**: Fetch and preprocess the data using `data_preprocessing.py`.
   ```python
   from models.stock_price_prediction.data_preprocessing import fetch_stock_data, preprocess_data

   df = fetch_stock_data('AAPL')  # Example: Fetch data for Apple stock
   X, y, scaler = preprocess_data(df)
   ```

2. **Build and Train Model**:
   ```python
   from models.stock_price_prediction.lstm_model import build_lstm_model
   from models.stock_price_prediction.train_model import train_model

   model = build_lstm_model((60, 1))  # Example: 60 time steps
   trained_model = train_model(model, X, y, epochs=10)
   trained_model.save_weights('model_weights.h5')
   ```

### Making Predictions

1. **Load Model and Make Predictions**:
   Use `evaluate_model.py` to evaluate the model with new data or for predictions.
   ```python
   from models.stock_price_prediction.evaluate_model import evaluate_model

   mse, predictions, actuals = evaluate_model(trained_model, X_test, y_test, scaler)
   ```

2. **Use the Flask API**:
   Send a POST request with a JSON body containing a stock ticker symbol to get predictions.
   ```bash
   curl -X POST http://localhost:5000/predict -H "Content-Type: application/json" -d '{"ticker": "AAPL"}'
   ```

### API Integration

The Flask API (`/predict`) accepts a JSON payload with the stock symbol and responds with the predicted stock price. The frontend can use JavaScript to fetch the prediction.

---

## Components

### `data_preprocessing.py`
- **fetch_stock_data(ticker, start_date, end_date)**: Downloads historical data for a given stock ticker.
- **preprocess_data(df)**: Normalizes and reshapes the data to prepare it for the LSTM model.

### `lstm_model.py`
- **build_lstm_model(input_shape)**: Constructs and compiles an LSTM model for predicting stock prices.

### `train_model.py`
- **train_model(model, X_train, y_train, epochs, batch_size)**: Trains the LSTM model with specified hyperparameters.

### `evaluate_model.py`
- **evaluate_model(model, X_test, y_test, scaler)**: Evaluates the trained model, calculates mean squared error, and provides rescaled predictions.

### `flask_api.py`
- **Flask API**: Starts a Flask server and exposes an endpoint `/predict` for predicting the stock price.

### `static/js/stock_predict.js`
- **JavaScript Fetch API**: Calls the Flask API to get predictions and displays the result on the web page.

---

## Future Improvements

- Implement additional models for customer behavior and financial trend analysis.
- Allow the user to select model types and input parameters via the frontend.
- Add error handling and logging for the Flask API to ensure reliability in production.

---

## Contributing

1. Fork the repository and create a new branch.
2. Commit your changes.
3. Push to the branch and submit a pull request.