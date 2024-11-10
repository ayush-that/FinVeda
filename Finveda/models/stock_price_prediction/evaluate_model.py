# Evaluate the model using test data
def evaluate_model(model, X_test, y_test, scaler):
    predicted_stock_price = model.predict(X_test)
    
    # Rescale the predictions and actual values back to the original scale
    predicted_stock_price = scaler.inverse_transform(predicted_stock_price)
    y_test_rescaled = scaler.inverse_transform(y_test.reshape(-1, 1))
    
    # Calculate the Mean Squared Error (MSE)
    mse = np.mean(np.square(predicted_stock_price - y_test_rescaled))
    
    return mse, predicted_stock_price, y_test_rescaled
