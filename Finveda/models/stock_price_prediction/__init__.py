# Initialize the stock price prediction package

# Import necessary functions for ease of access
from .data_preprocessing import fetch_stock_data, preprocess_data
from .lstm_model import build_lstm_model
from .train_model import train_model
from .evaluate_model import evaluate_model
from .flask_api import app  # Importing Flask app for API exposure

# You can also add other modules or utilities as needed
