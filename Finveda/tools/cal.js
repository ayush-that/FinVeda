function calculateSIP() {
    const monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value);
    const annualInterestRate = parseFloat(document.getElementById('annualInterestRate').value);
    const investmentPeriod = parseFloat(document.getElementById('investmentPeriod').value);

    if (isNaN(monthlyInvestment) || isNaN(annualInterestRate) || isNaN(investmentPeriod) || monthlyInvestment <= 0 || annualInterestRate <= 0 || investmentPeriod <= 0) {
        document.getElementById('sipResult').innerHTML = `<p>Please enter valid positive values for all fields.</p>`;
        return;
    }

    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    const totalMonths = investmentPeriod * 12;

    const futureValue = monthlyInvestment * (((Math.pow(1 + monthlyInterestRate, totalMonths) - 1) / monthlyInterestRate) + 1);

    const sipResultElement = document.getElementById('sipResult');
    sipResultElement.innerHTML = `<h3>Potential Returns:</h3>
                               <p>If you invest INR ${monthlyInvestment} every month at an annual interest rate of ${annualInterestRate}%,</p>
                               <p>your potential returns after ${investmentPeriod} years could be approximately INR ${futureValue.toFixed(2)}.</p>`;
}

function calculatePPF() {
    const principalAmount = parseFloat(document.getElementById('principalAmount').value);
    const annualInterestRatePPF = parseFloat(document.getElementById('annualInterestRatePPF').value);
    const investmentPeriodPPF = parseFloat(document.getElementById('investmentPeriodPPF').value);

    if (isNaN(principalAmount) || isNaN(annualInterestRatePPF) || isNaN(investmentPeriodPPF) || principalAmount <= 0 || annualInterestRatePPF <= 0 || investmentPeriodPPF <= 0) {
        document.getElementById('ppfResult').innerHTML = `<p>Please enter valid positive values for all fields.</p>`;
        return;
    }

    const monthlyInterestRatePPF = (annualInterestRatePPF / 100) / 12;
    const totalMonthsPPF = investmentPeriodPPF * 12;

    const futureValuePPF = principalAmount * Math.pow(1 + monthlyInterestRatePPF, totalMonthsPPF);

    const ppfResultElement = document.getElementById('ppfResult');
    ppfResultElement.innerHTML = `<h3>Potential Returns:</h3>
                               <p>If you invest INR ${principalAmount} at an annual interest rate of ${annualInterestRatePPF}%,</p>
                               <p>your maturity amount after ${investmentPeriodPPF} years could be approximately INR ${futureValuePPF.toFixed(2)}.</p>`;
}
