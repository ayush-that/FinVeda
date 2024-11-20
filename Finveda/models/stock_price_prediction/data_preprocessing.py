import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import yfinance as yf

# Fetching historical stock data
def fetch_stock_data(ticker, start_date='2010-01-01', end_date='2024-01-01'):
    data = yf.download(ticker, start=start_date, end=end_date)
    return data

# Feature engineering and preprocessing
def preprocess_data(df):
    # Keep only relevant columns: 'Date', 'Close' (you can add more features like 'Open', 'Volume' etc.)
    df = df[['Close']]
    
    # Normalize the data using MinMaxScaler
    scaler = MinMaxScaler(feature_range=(0, 1))
    df_scaled = scaler.fit_transform(df)
    
    # Create a dataset with 'X' as previous n-day stock prices and 'y' as next day price
    def create_dataset(data, time_step=60):
        X, y = [], []
        for i in range(len(data) - time_step - 1):
            X.append(data[i:(i + time_step), 0])
            y.append(data[i + time_step, 0])
        return np.array(X), np.array(y)
    
    X, y = create_dataset(df_scaled)
    
    # Reshaping X for LSTM (samples, time steps, features)
    X = X.reshape(X.shape[0], X.shape[1], 1)
    
    return X, y, scaler
