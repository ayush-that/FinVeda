document.getElementById("calculate-Btn4").addEventListener("click", function() {
    const salary = parseFloat(document.getElementById("salary").value);
    const age = parseInt(document.getElementById("age").value);
    const contribution = parseFloat(document.getElementById("contribution").value) / 100;
    const increase = parseFloat(document.getElementById("increase").value) / 100;
    const rate = parseFloat(document.getElementById("rate2").value) / 100;

    if (isNaN(salary) || isNaN(age) || isNaN(contribution) || isNaN(increase) || isNaN(rate)) {
        alert("Please fill in all the fields correctly.");
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
