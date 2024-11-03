document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculate-Btn3").addEventListener("click", function() {
        const monthlyInstallment = parseFloat(document.getElementById("monthly-installment").value);
        const annualInterestRate = parseFloat(document.getElementById("rate1").value);
        const timePeriodMonths = parseFloat(document.getElementById("months1").value);

        // Clear previous error messages
        clearErrorMessages();

        // Validate inputs and display errors if any
        const hasError = validateInputs(monthlyInstallment, annualInterestRate, timePeriodMonths);
        if (hasError) return;

        const monthlyInterestRate = annualInterestRate / 12 / 100;
        let maturityAmount = 0;

        for (let i = 0; i < timePeriodMonths; i++) {
            maturityAmount += monthlyInstallment * Math.pow((1 + monthlyInterestRate), (timePeriodMonths - i)); 
        }

        const totalInvestAmount = monthlyInstallment * timePeriodMonths;
        const interestEarned = maturityAmount - totalInvestAmount;

        const formatter = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        });

        // Display formatted results
        document.getElementById("interestEarned1").innerText = `Interest Earned: ${formatter.format(interestEarned)}`;
        document.getElementById("maturityAmount1").innerText = `Maturity Amount: ${formatter.format(maturityAmount)}`;
    });

    document.getElementById("clearBtn2").addEventListener("click", function() {
        clearInputs();
    });

    function validateInputs(monthlyInstallment, annualInterestRate, timePeriodMonths) {
        let hasError = false;

        if (isNaN(monthlyInstallment) || monthlyInstallment <= 0) {
            showError('installmentError', 'Please enter a valid positive number for the monthly installment.');
            hasError = true;
        }
        if (isNaN(annualInterestRate) || annualInterestRate <= 0) {
            showError('rateError', 'Please enter a valid positive number for the annual interest rate.');
            hasError = true;
        }
        if (isNaN(timePeriodMonths) || timePeriodMonths <= 0) {
            showError('monthsError', 'Please enter a valid positive number for the time period in months.');
            hasError = true;
        }

        return hasError;
    }

    function showError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    function clearErrorMessages() {
        document.getElementById('installmentError').textContent = '';
        document.getElementById('rateError').textContent = '';
        document.getElementById('monthsError').textContent = '';
    }

    function clearInputs() {
        document.getElementById("monthly-installment").value = '';
        document.getElementById("rate1").value = '';
        document.getElementById("months1").value = '';
        document.getElementById("interestEarned1").innerText = '';
        document.getElementById("maturityAmount1").innerText = '';
        clearErrorMessages();
    }
});