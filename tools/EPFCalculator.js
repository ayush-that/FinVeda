document.getElementById("calculate-Btn4").addEventListener("click", function() {
    const salary = parseFloat(document.getElementById("salary").value);
    const age = parseInt(document.getElementById("age").value);
    const contribution = parseFloat(document.getElementById("contribution").value) / 100;
    const increase = parseFloat(document.getElementById("increase").value) / 100;
    const rate = parseFloat(document.getElementById("rate2").value) / 100;

    // Clear previous error messages
    clearErrorMessages();

    // Validate inputs and show errors if any
    const errorMessage = validateInputs(salary, age, contribution, increase, rate);
    if (errorMessage) {
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
    clearInputs();
});

function validateInputs(salary, age, contribution, increase, rate) {
    let hasError = false;

    if (isNaN(salary) || salary <= 0) {
        showError("salaryError", "Please enter a valid positive number for Salary.");
        hasError = true;
    }
    if (isNaN(age) || age < 18 || age >= 60) {
        showError("ageError", "Please enter a valid age (between 18 and 59).");
        hasError = true;
    }
    if (isNaN(contribution) || contribution <= 0 || contribution > 1) {
        showError("contributionError", "Please enter a valid Contribution percentage (greater than 0 and less than or equal to 100).");
        hasError = true;
    }
    if (isNaN(increase) || increase < 0 || increase > 1) {
        showError("increaseError", "Please enter a valid yearly salary increase percentage (0 to 100).");
        hasError = true;
    }
    if (isNaN(rate) || rate < 0 || rate > 1) {
        showError("rateError", "Please enter a valid interest rate percentage (0 to 100).");
        hasError = true;
    }

    return hasError;
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrorMessages() {
    document.getElementById("salaryError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("contributionError").textContent = "";
    document.getElementById("increaseError").textContent = "";
    document.getElementById("rateError").textContent = "";
}

function clearInputs() {
    document.getElementById("salary").value = "";
    document.getElementById("age").value = "";
    document.getElementById("contribution").value = "";
    document.getElementById("increase").value = "";
    document.getElementById("rate2").value = "";
    document.getElementById("totalEPF").textContent = "";
    clearErrorMessages();
}