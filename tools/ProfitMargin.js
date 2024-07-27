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
  