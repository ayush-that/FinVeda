// Utility function to get element value and parse it
function getValue(id, parseFunc = parseFloat) {
    let value = document.getElementById(id).value;
    return parseFunc(value) || 0;
}

// Counter animation with configurable currency symbol and duration
function animateValue(id, start, end, duration, currencySymbol = '₹') {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);

    let timer = setInterval(function() {
        current += increment;
        obj.innerText = `${currencySymbol}${current.toLocaleString()}`;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// EMI Calculator
function calculateEMI() {
    let loanAmount = getValue("loanAmount");
    let interestRate = getValue("interestRate") / 12 / 100;
    let loanTenure = getValue("loanTenure", parseInt);

    if (loanAmount && interestRate && loanTenure) {
        let emi = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTenure)) / 
                  (Math.pow(1 + interestRate, loanTenure) - 1);
        
        animateValue("emiResult", 0, Math.round(emi), 1000);
    } else {
        alert("Please enter all required values for EMI calculation.");
    }
}

// SIP Calculator with Chart
function calculateSIP() {
    let monthlyInvestment = getValue("monthlyInvestment");
    let returnRate = getValue("returnRate") / 12 / 100;
    let investmentDuration = getValue("investmentDuration", parseInt) * 12;

    if (monthlyInvestment && returnRate && investmentDuration) {
        let futureValue = monthlyInvestment * (Math.pow(1 + returnRate, investmentDuration) - 1) * 
                          (1 + returnRate);

        animateValue("sipResult", 0, Math.round(futureValue), 1000);
        renderSIPChart(futureValue, investmentDuration);
    } else {
        alert("Please enter all required values for SIP calculation.");
    }
}

// Render SIP Projection Chart
function renderSIPChart(futureValue, investmentDuration) {
    const ctx = document.getElementById('sipChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: investmentDuration / 12}, (_, i) => i + 1),
            datasets: [{
                label: 'Projected Value',
                data: Array.from({length: investmentDuration / 12}, (_, i) => futureValue / (investmentDuration / 12) * (i + 1)),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Retirement Savings Calculator
function calculateRetirement() {
    let currentAge = getValue("currentAge", parseInt);
    let retirementAge = getValue("retirementAge", parseInt);
    let monthlyExpenses = getValue("monthlyExpenses");
    let inflationRate = getValue("inflationRate") / 100;

    if (currentAge && retirementAge && monthlyExpenses && inflationRate) {
        let yearsToRetirement = retirementAge - currentAge;
        let futureMonthlyExpenses = monthlyExpenses * Math.pow(1 + inflationRate, yearsToRetirement);
        let retirementCorpus = futureMonthlyExpenses * 12 * (80 - retirementAge);

        animateValue("retirementResult", 0, Math.round(retirementCorpus), 1000);
    } else {
        alert("Please enter all required values for retirement calculation.");
    }
}