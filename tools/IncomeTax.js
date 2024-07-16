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
