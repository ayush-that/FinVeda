import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)

def load_data(file_path):
    """
    Load data from a CSV file.
    Args:
    - file_path (str): Path to the CSV file.

    Returns:
    - DataFrame: Loaded financial data.
    """
    try:
        data = pd.read_csv(file_path)
        logging.info(f"Data loaded successfully from {file_path}")
        return data
    except Exception as e:
        logging.error(f"Error loading data: {e}")
        raise

def clean_data(data):
    """
    Clean the financial data by handling missing values, removing duplicates, etc.
    Args:
    - data (DataFrame): Raw financial data.

    Returns:
    - DataFrame: Cleaned data.
    """
    # Remove duplicates
    data = data.drop_duplicates()

    # Handle missing values: Fill missing values with the median of the respective column
    data = data.fillna(data.median())

    logging.info("Data cleaned: Missing values handled, duplicates removed.")
    return data

def feature_engineering(data):
    """
    Perform feature engineering on the dataset.
    Args:
    - data (DataFrame): Cleaned financial data.

    Returns:
    - DataFrame: Data with engineered features.
    """
    # Example feature engineering: Adding moving average as a feature
    data['Moving_Avg'] = data['Price'].rolling(window=5).mean()

    # Example: Calculate percentage change
    data['Price_Change'] = data['Price'].pct_change()

    # Drop rows with NaN values created by rolling operation
    data = data.dropna()

    logging.info("Feature engineering completed: Moving averages and price changes added.")
    return data

def normalize_data(data, columns_to_normalize):
    """
    Normalize the data to bring all values to the same scale.
    Args:
    - data (DataFrame): Data with features.
    - columns_to_normalize (list): List of columns to normalize.

    Returns:
    - DataFrame: Data with normalized values.
    """
    scaler = StandardScaler()
    data[columns_to_normalize] = scaler.fit_transform(data[columns_to_normalize])

    logging.info(f"Data normalized for columns: {columns_to_normalize}")
    return data

def prepare_data_for_training(data, target_column, test_size=0.2):
    """
    Prepare data by splitting into features and target, and then into training and testing sets.
    Args:
    - data (DataFrame): Data with features and target.
    - target_column (str): The column name to be predicted (target variable).
    - test_size (float): Proportion of data to be used for testing (default is 0.2).

    Returns:
    - X_train, X_test, y_train, y_test: Split datasets.
    """
    X = data.drop(columns=[target_column])
    y = data[target_column]

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=test_size, random_state=42)

    logging.info(f"Data split into train and test sets with test size {test_size}.")
    return X_train, X_test, y_train, y_test

def preprocess_financial_data(file_path, target_column):
    """
    Full preprocessing pipeline for financial data.
    Args:
    - file_path (str): Path to the data file.
    - target_column (str): The column to be predicted.

    Returns:
    - X_train, X_test, y_train, y_test: Split datasets ready for model training.
    """
    # Step 1: Load the data
    data = load_data(file_path)

    # Step 2: Clean the data
    data = clean_data(data)

    # Step 3: Perform feature engineering
    data = feature_engineering(data)

    # Step 4: Normalize selected columns (example: 'Price', 'Volume')
    columns_to_normalize = ['Price', 'Volume', 'Moving_Avg', 'Price_Change']
    data = normalize_data(data, columns_to_normalize)

    # Step 5: Prepare the data for training
    X_train, X_test, y_train, y_test = prepare_data_for_training(data, target_column)

    return X_train, X_test, y_train, y_test

# Example usage
# from preprocess import preprocess_financial_data

# # Specify the file path and target column
# file_path = 'path/to/financial_data.csv'
# target_column = 'Price'  # or any other column you want to predict

# # Run the preprocessing
# X_train, X_test, y_train, y_test = preprocess_financial_data(file_path, target_column)

# # Now you can use X_train, X_test, y_train, y_test for model training