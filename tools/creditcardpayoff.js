document.addEventListener('DOMContentLoaded', function () {
    // Event listener for the Calculate button within the Credit Card Payoff Calculator
    document.querySelector('#CreditCardPayoff #calculateBtn').addEventListener('click', function() {
        calculateCreditCardPayoff('#CreditCardPayoff');
    });

    // Event listener for the Clear button within the Credit Card Payoff Calculator
    document.querySelector('#CreditCardPayoff #clearBtn').addEventListener('click', function() {
        clearCreditCardPayoff('#CreditCardPayoff');
    });
});

function calculateCreditCardPayoff(containerId) {
    // Retrieve user inputs within the specified container
    let container = document.querySelector(containerId);
    let balance = parseFloat(container.querySelector('#balance').value);
    let apr = parseFloat(container.querySelector('#apr').value);
    let monthlyPayment = parseFloat(container.querySelector('#monthly-payment').value);

    // Validate inputs
    if (isNaN(balance) || isNaN(apr) || isNaN(monthlyPayment) || balance <= 0 || apr <= 0 || monthlyPayment <= 0) {
        alert('Please enter valid numbers for Balance, APR, and Monthly Payment.');
        return;
    }

    // Convert APR to monthly interest rate
    let monthlyInterestRate = apr / 100 / 12;

    // Check if the monthly payment is greater than the interest
    if (monthlyPayment <= balance * monthlyInterestRate) {
        alert('Monthly payment must be greater than the monthly interest.');
        return;
    }

    // Calculate months to pay off and total interest paid
    let monthsToPayOff = Math.ceil(-Math.log(1 - (balance * monthlyInterestRate) / monthlyPayment) / Math.log(1 + monthlyInterestRate));
    let totalInterestPaid = monthsToPayOff * monthlyPayment - balance;

    // Display results within the specified container
    container.querySelector('#monthsToPayOff').textContent = monthsToPayOff;
    container.querySelector('#totalInterestPaid').textContent = totalInterestPaid.toFixed(2);
}

function clearCreditCardPayoff(containerId) {
    // Clear inputs and results within the specified container
    let container = document.querySelector(containerId);
    container.querySelector('#balance').value = '';
    container.querySelector('#apr').value = '';
    container.querySelector('#monthly-payment').value = '';
    container.querySelector('#monthsToPayOff').textContent = '0';
    container.querySelector('#totalInterestPaid').textContent = '0.00';
}
