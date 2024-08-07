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
document.getElementById('calculateBtn').addEventListener('click', function() {
    const balance = parseFloat(document.getElementById('balance').value);
    const apr = parseFloat(document.getElementById('apr').value);
    const monthlyPayment = parseFloat(document.getElementById('monthly-payment').value);

    if (isNaN(balance) || isNaN(apr) || isNaN(monthlyPayment)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    const monthlyInterestRate = apr / 100 / 12;
    let monthsToPayOff = 0;
    let totalInterestPaid = 0;
    let currentBalance = balance;

    while (currentBalance > 0) {
        const interest = currentBalance * monthlyInterestRate;
        currentBalance = currentBalance + interest - monthlyPayment;
        totalInterestPaid += interest;
        monthsToPayOff++;
        if (monthsToPayOff > 600) {
            alert('It will take more than 50 years to pay off the balance with the current monthly payment.');
            break;
        }
    }

    document.getElementById('monthsToPayOff').innerText = monthsToPayOff;
    document.getElementById('totalInterestPaid').innerText = totalInterestPaid.toFixed(2);
});

document.getElementById('clearBtn').addEventListener('click', function() {
    console.log('Clear button clicked'); // Debug log
    document.getElementById('balance').value = '';
    document.getElementById('apr').value = '';
    document.getElementById('monthly-payment').value = '';
    document.getElementById('monthsToPayOff').innerText = '0';
    document.getElementById('totalInterestPaid').innerText = '0.00';
});
