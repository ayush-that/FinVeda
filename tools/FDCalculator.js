document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateBtn2').addEventListener('click', function() {
        const principal = parseFloat(document.getElementById('principal').value);
        const rate = parseFloat(document.getElementById('rate').value);
        const years = parseInt(document.getElementById('years1').value);

        // Clear previous error messages
        clearErrorMessages();

        // Validate inputs and display errors if any
        const hasError = validateInputs(principal, rate, years);
        if (hasError) return;

        // Calculate maturity amount and interest earned
        const maturityAmount = principal * Math.pow((1 + rate / 100), years);
        const interestEarned = maturityAmount - principal;

        const formatter = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        });

        // Display formatted results
        document.getElementById('interestEarned').textContent = formatter.format(interestEarned);
        document.getElementById('maturityAmount').textContent = formatter.format(maturityAmount);
    });

    document.getElementById('clearBtn1').addEventListener('click', function() {
        clearInputs();
    });

    function validateInputs(principal, rate, years) {
        let hasError = false;

        if (isNaN(principal) || principal <= 0) {
            showError('principalError', 'Please enter a valid positive number for Principal.');
            hasError = true;
        }
        if (isNaN(rate) || rate <= 0) {
            showError('rateError', 'Please enter a valid positive number for Rate of Interest.');
            hasError = true;
        }
        if (isNaN(years) || years <= 0) {
            showError('yearsError', 'Please enter a valid number of years (greater than 0).');
            hasError = true;
        }

        return hasError;
    }

    function showError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    function clearErrorMessages() {
        document.getElementById('principalError').textContent = '';
        document.getElementById('rateError').textContent = '';
        document.getElementById('yearsError').textContent = '';
    }

    function clearInputs() {
        document.getElementById('principal').value = '';
        document.getElementById('rate').value = '';
        document.getElementById('years1').value = '';
        document.getElementById('interestEarned').textContent = '';
        document.getElementById('maturityAmount').textContent = '';
        clearErrorMessages();
    }
});