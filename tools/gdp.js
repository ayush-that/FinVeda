document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('GDPcalc');
    const resultElement = document.getElementById('gdp-result');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Get input values
      const personalConsumption = parseFloat(document.getElementById('personal').value);
      const grossInvestment = parseFloat(document.getElementById('investment').value);
      const governmentConsumption = parseFloat(document.getElementById('consumption').value);
      const exports = parseFloat(document.getElementById('exports').value);
      const imports = parseFloat(document.getElementById('imports').value);
  
      // Calculate GDP
      const gdp = personalConsumption + grossInvestment + governmentConsumption + exports - imports;
  
      // Display the result
      resultElement.textContent = `GDP: $${gdp.toFixed(2)}`;
    });
  
    form.addEventListener('reset', () => {
      // Clear the result when the form is reset
      resultElement.textContent = '';
    });
  });
  