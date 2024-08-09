document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateBtn2').addEventListener('click', function() {
        let principal = parseFloat(document.getElementById('principal').value);
        let rate = parseFloat(document.getElementById('rate').value);
        let years = parseInt(document.getElementById('years1').value);


        if (isNaN(principal) || isNaN(rate) || isNaN(years) || principal <= 0 || rate <= 0 || years <= 0) {
            alert('Please enter valid values.');
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
