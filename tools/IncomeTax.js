document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('income-tax-calculator');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        calculateIncomeTax();
    });
});

function calculateIncomeTax() {
    const income = parseFloat(document.getElementById('income').value);
    const taxRate = parseFloat(document.getElementById('tax-rate').value);

    if (isNaN(income) || isNaN(taxRate) || income <= 0 || taxRate < 0) {
        alert('Please enter valid positive numbers for both income and tax rate.');
        return;
    }

    const taxAmount = (income * taxRate) / 100;
    const realIncome = income - taxAmount;

    document.getElementById('income-tax').innerText = `Income Tax: ₹ ${taxAmount.toFixed(2)}`;
    document.getElementById('real-income').innerText = `Income After Tax: ₹ ${realIncome.toFixed(2)}`;
}

function clearIncomeTax() {
    document.getElementById('income-tax-calculator').reset();
    document.getElementById('income-tax').innerText = '';
    document.getElementById('real-income').innerText = '';
}
