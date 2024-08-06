document.getElementById('calculateBtn1').addEventListener('click', calculateSWP);

function calculateSWP() {
    const totalInvestment = parseFloat(document.getElementById('totalInvestment').value);
    const withdrawalPerMonth = parseFloat(document.getElementById('withdrawalPerMonth').value);
    const expectedReturnRate = parseFloat(document.getElementById('expectedReturnRate').value);
    const totalPeriod = parseFloat(document.getElementById('totalPeriod').value);

    if (isNaN(totalInvestment) || isNaN(withdrawalPerMonth) || isNaN(expectedReturnRate) || isNaN(totalPeriod)) {
        alert("Please fill all fields.");
        return;
    }

    const monthlyInterestRate = (expectedReturnRate / 100) / 12;
    const totalMonths = totalPeriod * 12;

    let finalValue = totalInvestment;
    for (let i = 0; i < totalMonths; i++) {
        finalValue = finalValue * (1 + monthlyInterestRate) - withdrawalPerMonth;
        if (finalValue < 0) {
            finalValue = 0;
            break;
        }
    }

    const remainingAmountElement = document.getElementById('remainingAmount');
    remainingAmountElement.textContent = `₹${finalValue.toFixed(2)}`;
}

