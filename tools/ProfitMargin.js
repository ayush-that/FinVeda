document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('profit-margin-calculator');
    const resultElement = document.getElementById('profit-margin');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const cost = parseFloat(document.getElementById('cost').value);
      const sellingPrice = parseFloat(document.getElementById('selling-price').value);
  
      if (isNaN(cost) || isNaN(sellingPrice) || cost <= 0 || sellingPrice <= 0) {
        resultElement.textContent = 'Please enter valid positive numbers for cost and selling price.';
        return;
      }
  
      const profit = sellingPrice - cost;
      const profitMargin = (profit / sellingPrice) * 100;
  
      resultElement.textContent = `Profit Margin: ${profitMargin.toFixed(2)}%`;
    });
  });
  function clearProfitMargin() {
    document.getElementById('profit-margin-calculator').reset();
    document.getElementById('profit-margin').innerText = '';
}

document.getElementById('profit-margin-calculator').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateProfitMargin();
});

function calculateProfitMargin() {
    const costPrice = parseFloat(document.getElementById('cost').value);
    const sellingPrice = parseFloat(document.getElementById('selling-price').value);

    if (isNaN(costPrice) || isNaN(sellingPrice)) {
        alert('Please enter valid numbers for both cost price and selling price.');
        return;
    }

    const profit = sellingPrice - costPrice;
    const profitMargin = (profit / sellingPrice) * 100;

    document.getElementById('profit-margin').innerText = `Profit Margin: ${profitMargin.toFixed(2)}%`;
}
