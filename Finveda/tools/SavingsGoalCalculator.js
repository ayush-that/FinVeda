function calculateSavings() {
    const goalAmount = parseFloat(document.getElementById('goalAmount').value);
    const currentSavings = parseFloat(document.getElementById('currentSavings').value);
    const timePeriod = parseInt(document.getElementById('timePeriod').value);

    if (isNaN(goalAmount) || isNaN(currentSavings) || isNaN(timePeriod) || goalAmount <= 0 || currentSavings < 0 || timePeriod <= 0) {
        document.getElementById('result').textContent = 'Please fill in all fields with valid positive values.';
        return;
    }

    if (goalAmount <= currentSavings) {
        document.getElementById('result').textContent = 'You have already reached your savings goal!';
        return;
    }

    const amountNeeded = goalAmount - currentSavings;
    const monthlySavings = amountNeeded / timePeriod;

    document.getElementById('result').textContent = `You need to save Rs. ${monthlySavings.toFixed(2)} per month to reach your goal.`;
}

function clearSavings() {
    document.getElementById('goalAmount').value = '';
    document.getElementById('currentSavings').value = '';
    document.getElementById('timePeriod').value = '';
    document.getElementById('result').innerText = '';
}
