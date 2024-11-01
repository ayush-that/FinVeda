document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('submitBtn').addEventListener('click', calculateGDP);
  

  document.querySelector('.btn-secondary').addEventListener('click', clearFields);
});

function calculateGDP() {

  const personalConsumption = parseFloat(document.getElementById('personal').value);
  const grossInvestment = parseFloat(document.getElementById('investment1').value);
  const governmentConsumption = parseFloat(document.getElementById('consumption').value);
  const exports = parseFloat(document.getElementById('exports').value);
  const imports = parseFloat(document.getElementById('imports').value);


  if (isNaN(personalConsumption) || isNaN(grossInvestment) || isNaN(governmentConsumption) || isNaN(exports) || isNaN(imports)) {
    alert('Please enter valid numbers for all fields.');
    return;
  }


  const gdp = personalConsumption + grossInvestment + governmentConsumption + exports - imports;


  document.getElementById('gdp-result').textContent = `GDP: ₹${gdp.toFixed(2)}`;
}

function clearFields() {
  document.getElementById('personal').value = '';
  document.getElementById('investment1').value = '';
  document.getElementById('consumption').value = '';
  document.getElementById('exports').value = '';
  document.getElementById('imports').value = '';
  
  document.getElementById('gdp-result').textContent = '';
}
