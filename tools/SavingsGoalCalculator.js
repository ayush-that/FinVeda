function calculateSavings() {
    const goalAmount = parseFloat(document.getElementById('goalAmount').value);
    const currentSavings = parseFloat(document.getElementById('currentSavings').value);
    const timePeriod = parseInt(document.getElementById('timePeriod').value);

    if (isNaN(goalAmount) || isNaN(currentSavings) || isNaN(timePeriod)) {
        document.getElementById('result').textContent = 'Please fill in all fields correctly.';
        return;
    }

    if (goalAmount <= currentSavings) {
        document.getElementById('result').textContent = 'You have already reached your savings goal!';
        return;
    }

    const amountNeeded = goalAmount - currentSavings;
    const monthlySavings = amountNeeded / timePeriod;

    document.getElementById('result').textContent =`You need to save Rs. ${monthlySavings.toFixed(2)} per month to reach your goal.`;
}
function clearSavings() {
    document.getElementById('goalAmount').value = '';
    document.getElementById('currentSavings').value = '';
    document.getElementById('monthlySavings').value = '';
    document.getElementById('interestRate').value = '';
    document.getElementById('result').innerText = '';
  }
  