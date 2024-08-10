document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#CreditCardPayoff #calculateBtn').addEventListener('click', function() {
        calculateCreditCardPayoff('#CreditCardPayoff');
    });

    document.querySelector('#CreditCardPayoff #clearBtn').addEventListener('click', function() {
        clearCreditCardPayoff('#CreditCardPayoff');
    });
});

function calculateCreditCardPayoff(containerId) {
    let container = document.querySelector(containerId);
    let balance = parseFloat(container.querySelector('#balance').value);
    let apr = parseFloat(container.querySelector('#apr').value);
    let monthlyPayment = parseFloat(container.querySelector('#monthly-payment').value);

    if (isNaN(balance) || isNaN(apr) || isNaN(monthlyPayment) || balance <= 0 || apr <= 0 || monthlyPayment <= 0) {
        alert('Please enter valid numbers for Balance, APR, and Monthly Payment.');
        return;
    }

    let monthlyInterestRate = apr / 100 / 12;

    if (monthlyPayment <= balance * monthlyInterestRate) {
        alert('Monthly payment must be greater than the monthly interest.');
        return;
    }

    let monthsToPayOff = Math.ceil(-Math.log(1 - (balance * monthlyInterestRate) / monthlyPayment) / Math.log(1 + monthlyInterestRate));
    let totalInterestPaid = monthsToPayOff * monthlyPayment - balance;

    container.querySelector('#monthsToPayOff').textContent = `₹${monthsToPayOff.toFixed(2)}`;
    container.querySelector('#totalInterestPaid').textContent = `₹${totalInterestPaid.toFixed(2)}`;
}

function clearCreditCardPayoff(containerId) {
    let container = document.querySelector(containerId);
    container.querySelector('#balance').value = '';
    container.querySelector('#apr').value = '';
    container.querySelector('#monthly-payment').value = '';
    container.querySelector('#monthsToPayOff').textContent = '0';
    container.querySelector('#totalInterestPaid').textContent = '₹0.00';
}
