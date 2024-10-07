document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('income-tax-calculator');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const income = parseFloat(document.getElementById('income').value);
        const taxRate = parseFloat(document.getElementById('tax-rate').value);
        
        if (isNaN(income) || isNaN(taxRate)) {
            alert('Please enter valid numbers');
            return;
        }

        const incomeTax = (income * taxRate) / 100;
        const realIncome = income - incomeTax;

        document.getElementById('income-tax').textContent = `Income Tax: ₹ ${incomeTax.toFixed(2)}`;
        document.getElementById('real-income').textContent = `Real Income:₹ ${realIncome.toFixed(2)}`;
    });
});
function clearIncomeTax() {
    document.getElementById('income-tax-calculator').reset();
    document.getElementById('income-tax').innerText = '';
    document.getElementById('real-income').innerText = '';
}

document.getElementById('income-tax-calculator').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateIncomeTax();
});

function calculateIncomeTax() {
    const income = parseFloat(document.getElementById('income').value);
    const taxRate = parseFloat(document.getElementById('tax-rate').value);

    if (isNaN(income) || isNaN(taxRate)) {
        alert('Please enter valid numbers for both income and tax rate.');
        return;
    }

    const taxAmount = (income * taxRate) / 100;
    const realIncome = income - taxAmount;

    document.getElementById('income-tax').innerText = `Income Tax: Rs. ${taxAmount.toFixed(2)}`;
    document.getElementById('real-income').innerText = `Income After Tax: Rs. ${realIncome.toFixed(2)}`;
}
