function calculateEMI() {
    // Retrieve input values
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var loanTenure = parseFloat(document.getElementById('loanTenure').value);

    // Calculate monthly interest rate
    var monthlyInterestRate = (interestRate / 12) / 100;

    // Calculate EMI
    var emi = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure) / (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);

    // Calculate total payment
    var totalPayment = emi * loanTenure;

    // Calculate total interest paid
    var totalInterestPaid = totalPayment - loanAmount;

    // Display results
    document.getElementById('monthlyEMI').textContent = 'INR ' + emi.toFixed(2);
    document.getElementById('totalPayment').textContent = 'INR ' + totalPayment.toFixed(2);
    document.getElementById('totalInterestPaid').textContent = 'INR ' + totalInterestPaid.toFixed(2);
}