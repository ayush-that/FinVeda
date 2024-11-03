document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateBtn').addEventListener('click', calculateSavings);
    document.getElementById('clearBtn').addEventListener('click', clearSavings);

    // Clear error messages when user changes input
    document.getElementById('goalAmount').addEventListener('input', clearErrorMessages);
    document.getElementById('currentSavings').addEventListener('input', clearErrorMessages);
    document.getElementById('timePeriod').addEventListener('input', clearErrorMessages);
});

function calculateSavings() {
    const goalAmount = parseFloat(document.getElementById('goalAmount').value);
    const currentSavings = parseFloat(document.getElementById('currentSavings').value);
    const timePeriod = parseInt(document.getElementById('timePeriod').value);

    // Clear previous error messages
    clearErrorMessages();

    // Validate inputs and display errors if any
    const hasError = validateInputs(goalAmount, currentSavings, timePeriod);
    if (hasError) return;

    if (goalAmount <= currentSavings) {
        document.getElementById('result').textContent = 'You have already reached your savings goal!';
        return;
    }

    const amountNeeded = goalAmount - currentSavings;
    const monthlySavings = amountNeeded / timePeriod;

    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    });

    document.getElementById('result').textContent = `You need to save ${formatter.format(monthlySavings)} per month to reach your goal.`;
}

function validateInputs(goalAmount, currentSavings, timePeriod) {
    let hasError = false;

    if (isNaN(goalAmount) || goalAmount <= 0) {
        showError('goalAmountError', 'Please enter a valid positive goal amount.');
        hasError = true;
    }
    if (isNaN(currentSavings) || currentSavings < 0) {
        showError('currentSavingsError', 'Please enter a valid current savings amount (0 or more).');
        hasError = true;
    }
    if (isNaN(timePeriod) || timePeriod <= 0) {
        showError('timePeriodError', 'Please enter a valid positive time period.');
        hasError = true;
    }

    return hasError;
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrorMessages() {
    document.getElementById('goalAmountError').textContent = '';
    document.getElementById('currentSavingsError').textContent = '';
    document.getElementById('timePeriodError').textContent = '';
}

function clearSavings() {
    document.getElementById('goalAmount').value = '';
    document.getElementById('currentSavings').value = '';
    document.getElementById('timePeriod').value = '';
    document.getElementById('result').innerText = '';
    clearErrorMessages();
}