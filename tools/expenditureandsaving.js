function calculateSavings() {
    const income = parseFloat(document.getElementById('income').value);
    const expenditure = parseFloat(document.getElementById('expenditure').value);

    if (isNaN(income) || isNaN(expenditure)) {
        alert('Please enter valid numbers for income and expenditure.');
        return;
    }

    const savings = income - expenditure;
    document.getElementById('savingsAmount').textContent = savings.toFixed(2);
}
document.getElementById('calculateBtn').addEventListener('click', function() {
    const income = parseFloat(document.getElementById('monthly-income').value);
    const expenditure = parseFloat(document.getElementById('monthly-expenditure').value);
    const savings = income - expenditure;

    document.getElementById('savingsAmount').textContent = savings.toFixed(2);
});
document.getElementById('calculateBtn').addEventListener('click', function() {
    const income = parseFloat(document.getElementById('monthly-income').value);
    const expenditure = parseFloat(document.getElementById('monthly-expenditure').value);

    if (isNaN(income) || isNaN(expenditure)) {
        alert('Please enter valid numbers for income and expenditure.');
        return;
    }

    const savings = income - expenditure;
    document.getElementById('savingsAmount').innerText = savings.toFixed(2);
});

document.getElementById('calculateBtn').addEventListener('click', function() {
    const income = parseFloat(document.getElementById('monthly-income').value);
    const expenditure = parseFloat(document.getElementById('monthly-expenditure').value);

    if (isNaN(income) || isNaN(expenditure)) {
        alert('Please enter valid numbers for income and expenditure.');
        return;
    }

    const savings = income - expenditure;
    document.getElementById('savingsAmount').innerText = savings.toFixed(2);
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('monthly-income').value = '';
    document.getElementById('monthly-expenditure').value = '';
    document.getElementById('savingsAmount').innerText = '0.00';
});
