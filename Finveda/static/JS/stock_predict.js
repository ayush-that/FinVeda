// Function to call the Flask API and get stock price prediction
async function getStockPrediction(ticker) {
    const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ticker: ticker })
    });

    const data = await response.json();
    console.log('Predicted Stock Price:', data.predicted_stock_price);
    // Display the predicted stock price on the website
    document.getElementById('stockPrediction').innerText = `Predicted Stock Price: $${data.predicted_stock_price}`;
}

// Example usage: Trigger prediction when the user enters a stock symbol
document.getElementById('predictButton').addEventListener('click', () => {
    const ticker = document.getElementById('stockTicker').value;
    getStockPrediction(ticker);
});
