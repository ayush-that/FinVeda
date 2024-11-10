# Constants for file paths
RAW_DATA_PATH = "data/raw_data.csv"
PROCESSED_DATA_PATH = "data/processed_data.csv"
MODEL_PATH = "models/model.pkl"
PLOT_PATH = "plots/feature_importance.png"
LOG_FILE_PATH = "logs/project.log"
TRAINING_LOG_FILE_PATH = "logs/training.log"
TEST_DATA_PATH = "data/test_data.csv"
PREDICTIONS_PATH = "data/predictions.csv"

# Constants for data preprocessing
DATE_COLUMN = "Date"
TARGET_COLUMN = "Stock Price"
FEATURE_COLUMNS = ["Open", "High", "Low", "Volume", "Adj Close"]
CLEANED_DATA_COLUMNS = ["Date", "Open", "High", "Low", "Close", "Volume", "Adj Close", "Pct Change"]

# Constants for model training
TRAIN_TEST_SPLIT_RATIO = 0.8  # 80% train, 20% test
RANDOM_SEED = 42  # Seed for reproducibility
MODEL_TYPE = "RandomForest"  # Model to be used in training (e.g., "RandomForest", "XGBoost")
N_ESTIMATORS = 100  # Number of estimators for the RandomForest model
MAX_DEPTH = 10  # Maximum depth of trees in RandomForest
LEARNING_RATE = 0.05  # Learning rate for models like GradientBoosting or XGBoost
EPOCHS = 100  # Number of epochs for training a neural network (if applicable)

# Constants for feature engineering
FEATURE_ENGINEERING_METHODS = ['log', 'rolling_average', 'pct_change']  # List of methods to be applied for feature extraction

# Constants for evaluation metrics
EVALUATION_METRICS = ["MAE", "RMSE", "R2"]  # Metrics used to evaluate models
MAE_THRESHOLD = 0.1  # Threshold for Mean Absolute Error (MAE)
RMSE_THRESHOLD = 0.2  # Threshold for Root Mean Squared Error (RMSE)
R2_THRESHOLD = 0.75  # Threshold for R-squared

# Constants for plotting
PLOT_WIDTH = 10
PLOT_HEIGHT = 6
PLOT_STYLE = 'seaborn-darkgrid'  # Seaborn style for plotting

# Constants for predictive analytics
PREDICTION_WINDOW = 5  # Number of previous days to consider for predicting future stock price

# Constants for deployment
DEPLOYMENT_URL = "http://localhost:5000/api/predict"  # URL for API deployment
API_KEY = "YOUR_API_KEY_HERE"  # API key for authentication (if needed)

# Constants for logging
LOG_LEVEL = "INFO"  # Logging level (e.g., "INFO", "DEBUG", "WARNING", "ERROR")

# Other Constants
NUM_THREADS = 4  # Number of threads to use for parallel processing
BATCH_SIZE = 32  # Batch size for model training

# Example Usage
# from constants import RAW_DATA_PATH, TRAIN_TEST_SPLIT_RATIO, PLOT_WIDTH

# # Using constants in your code
# print(RAW_DATA_PATH)  # Output: "data/raw_data.csv"
