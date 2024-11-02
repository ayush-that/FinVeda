document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateBtn2').addEventListener('click', function() {
        let principal = parseFloat(document.getElementById('principal').value);
        let rate = parseFloat(document.getElementById('rate').value);
        let years = parseInt(document.getElementById('years1').value);

        let errorMessage = '';

        if (isNaN(principal) || principal <= 0) {
            errorMessage += 'Please enter a valid positive number for Principal.\n';
        }
        if (isNaN(rate) || rate <= 0) {
            errorMessage += 'Please enter a valid positive number for Rate of Interest.\n';
        }
        if (isNaN(years) || years <= 0) {
            errorMessage += 'Please enter a valid number of years (greater than 0).\n';
        }

        if (errorMessage) {
            alert(errorMessage);
            return;
        }

        let maturityAmount = principal * Math.pow((1 + rate / 100), years);
        let interestEarned = maturityAmount - principal;

        document.getElementById('interestEarned').textContent = '₹' + interestEarned.toFixed(2);
        document.getElementById('maturityAmount').textContent = '₹' + maturityAmount.toFixed(2);
    });

    document.getElementById('clearBtn1').addEventListener('click', function() {
        document.getElementById('principal').value = '';
        document.getElementById('rate').value = '';
        document.getElementById('years1').value = '';
        document.getElementById('interestEarned').textContent = '';
        document.getElementById('maturityAmount').textContent = '';
    });
});
