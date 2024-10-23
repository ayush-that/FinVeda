document.addEventListener('DOMContentLoaded', function() {
  // Fill form fields from URL parameters
  fillFormFromUrlParams();

  // Handle form submission to calculate pension
  document.getElementById('pension-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
      calculatePension(); // Call the function to calculate pension
  });

});

// Function to fill form inputs from URL parameters
function fillFormFromUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const salary = urlParams.get('salary');
  const years = urlParams.get('years');
  const pensionPercent = urlParams.get('pensionPercent');

  // Set the values in the input fields if they exist
  if (salary) document.getElementById('salary').value = salary;
  if (years) document.getElementById('years').value = years;
  if (pensionPercent) document.getElementById('pensionPercent').value = pensionPercent;
}

function calculatePension() {
  // Get input values and trim whitespace
  const salaryInput = document.getElementById('salary').value.trim();
  const yearsInput = document.getElementById('years').value.trim();
  const pensionPercentInput = document.getElementById('pensionPercent').value.trim();

  // Parse input values
  const salary = parseFloat(salaryInput);
  const years = parseFloat(yearsInput);
  const pensionPercent = parseFloat(pensionPercentInput);

  // Log the parsed values for debugging
  console.log(`Parsed Values: Salary=${salary}, Years=${years}, Pension Percent=${pensionPercent}`);

  // Validate inputs for negative values only
  if (salary < 0 || years < 0 || pensionPercent < 0) {
      alert('Please enter valid positive numbers:\n- Annual Salary: 0 or greater\n- Years of Service: 0 or greater\n- Pension Percentage: 0 or greater');
      return; // Exit if any input is negative
  }

  // Calculate pension using the formula: pension = salary * years * (pensionPercent / 100)
  const pension = salary * years * (pensionPercent / 100);

  // Display the result directly
  if (!isNaN(pension) && pension >= 0) { // Check for NaN and ensure the pension is non-negative
      document.getElementById('pension-result').textContent = `Estimated Pension: ₹${pension.toFixed(2)}`;
  } else {
      document.getElementById('pension-result').textContent = 'Error in calculation. Please check your inputs.';
  }
}
