// Counter animation
function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);

    let timer = setInterval(function() {
        current += increment;
        obj.innerText = `₹${current.toLocaleString()}`;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// EMI Calculator
function calculateEMI() {
    let loanAmount = parseFloat(document.getElementById("loanAmount").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value) / 12 / 100;
    let loanTenure = parseInt(document.getElementById("loanTenure").value);

    let emi = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTenure)) / 
              (Math.pow(1 + interestRate, loanTenure) - 1);
    
    animateValue("emiResult", 0, Math.round(emi), 1000);
}

// SIP Calculator with Chart
function calculateSIP() {
    let monthlyInvestment = parseFloat(document.getElementById("monthlyInvestment").value);
    let returnRate = parseFloat(document.getElementById("returnRate").value) / 12 / 100;
    let investmentDuration = parseInt(document.getElementById("investmentDuration").value) * 12;

    let futureValue = monthlyInvestment * (Math.pow(1 + returnRate, investmentDuration) - 1) * 
                      (1 + returnRate);

    animateValue("sipResult", 0, Math.round(futureValue), 1000);
    renderSIPChart(futureValue);
}

// Render SIP Projection Chart
function renderSIPChart(futureValue) {
    const ctx = document.getElementById('sipChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: 10}, (_, i) => i + 1),
            datasets: [{
                label: 'Projected Value',
                data: Array.from({length: 10}, (_, i) => futureValue / 10 * (i + 1)),
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
    let currentAge = parseInt(document.getElementById("currentAge").value);
    let retirementAge = parseInt(document.getElementById("retirementAge").value);
    let monthlyExpenses = parseFloat(document.getElementById("monthlyExpenses").value);
    let inflationRate = parseFloat(document.getElementById("inflationRate").value) / 100;

    let yearsToRetirement = retirementAge - currentAge;
    let futureMonthlyExpenses = monthlyExpenses * Math.pow(1 + inflationRate, yearsToRetirement);
    let retirementCorpus = futureMonthlyExpenses * 12 * (80 - retirementAge);

    animateValue("retirementResult", 0, Math.round(retirementCorpus), 1000);
}
