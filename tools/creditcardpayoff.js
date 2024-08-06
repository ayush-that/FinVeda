document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the Calculate button
    document.getElementById('calculateBtn').addEventListener('click', calculateCreditCardPayoff);
});

function calculateCreditCardPayoff() {
    // Retrieve user inputs
    let balance = parseFloat(document.getElementById('balance').value);
    let apr = parseFloat(document.getElementById('apr').value);
    let monthlyPayment = parseFloat(document.getElementById('monthly-payment').value);

    // Debugging: Log the inputs to the console
    console.log("Balance:", balance);
    console.log("APR:", apr);
    console.log("Monthly Payment:", monthlyPayment);

    // Validate inputs
    if (isNaN(balance) || isNaN(apr) || isNaN(monthlyPayment) || balance <= 0 || apr <= 0 || monthlyPayment <= 0) {
        alert('Please enter valid numbers for Balance, APR, and Monthly Payment.');
        return;
    }

    // Convert APR to monthly interest rate
    let monthlyInterestRate = apr / 100 / 12;

    // Debugging: Log the monthly interest rate to the console
    console.log("Monthly Interest Rate:", monthlyInterestRate);

    // Check if the monthly payment is greater than the interest
    if (monthlyPayment <= balance * monthlyInterestRate) {
        alert('Monthly payment must be greater than the monthly interest.');
        return;
    }

    // Calculate months to pay off and total interest paid
    let monthsToPayOff = Math.ceil(-Math.log(1 - (balance * monthlyInterestRate) / monthlyPayment) / Math.log(1 + monthlyInterestRate));
    let totalInterestPaid = monthsToPayOff * monthlyPayment - balance;

    // Debugging: Log the calculated results to the console
    console.log("Months to Pay Off:", monthsToPayOff);
    console.log("Total Interest Paid:", totalInterestPaid);

    // Display results
    document.getElementById('monthsToPayOff').textContent = monthsToPayOff;
    document.getElementById('totalInterestPaid').textContent = totalInterestPaid.toFixed(2);
}
