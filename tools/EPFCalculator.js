document.getElementById("calculate-Btn4").addEventListener("click", function() {
    const salary = parseFloat(document.getElementById("salary").value);
    const age = parseInt(document.getElementById("age").value);
    const contribution = parseFloat(document.getElementById("contribution").value) / 100;
    const increase = parseFloat(document.getElementById("increase").value) / 100;
    const rate = parseFloat(document.getElementById("rate2").value) / 100;

    let errorMessage = '';

    if (isNaN(salary) || salary <= 0) {
        errorMessage += 'Please enter a valid positive number for Salary.\n';
    }
    if (isNaN(age) || age < 18 || age >= 60) {
        errorMessage += 'Please enter a valid age (between 18 and 59).\n';
    }
    if (isNaN(contribution) || contribution <= 0 || contribution > 1) {
        errorMessage += 'Please enter a valid Contribution percentage (greater than 0 and less than or equal to 100).\n';
    }
    if (isNaN(increase) || increase < 0 || increase > 1) {
        errorMessage += 'Please enter a valid yearly salary increase percentage (0 to 100).\n';
    }
    if (isNaN(rate) || rate < 0 || rate > 1) {
        errorMessage += 'Please enter a valid interest rate percentage (0 to 100).\n';
    }

    if (errorMessage) {
        alert(errorMessage);
        return;
    }

    const retirementAge = 60;
    const monthsInYear = 12;
    const yearsToRetirement = retirementAge - age;

    let totalEPF = 0;
    let currentSalary = salary;

    for (let i = 0; i < yearsToRetirement; i++) {
        const yearlyContribution = currentSalary * contribution * monthsInYear;
        totalEPF += yearlyContribution;
        totalEPF += totalEPF * rate;
        currentSalary += currentSalary * increase;
    }

    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    });

    document.getElementById("totalEPF").textContent = formatter.format(totalEPF);
});

document.getElementById("clearBtn3").addEventListener("click", function() {
    document.getElementById("salary").value = "";
    document.getElementById("age").value = "";
    document.getElementById("contribution").value = "";
    document.getElementById("increase").value = "";
    document.getElementById("rate2").value = "";
    document.getElementById("totalEPF").textContent = "";
});
