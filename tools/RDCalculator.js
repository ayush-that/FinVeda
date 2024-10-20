document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculate-Btn3").addEventListener("click", function() {
        const monthlyInstallment = parseFloat(document.getElementById("monthly-installment").value);
        const annualInterestRate = parseFloat(document.getElementById("rate1").value);
        const timePeriodMonths = parseFloat(document.getElementById("months1").value);

        if (isNaN(monthlyInstallment) || isNaN(annualInterestRate) || isNaN(timePeriodMonths) || monthlyInstallment <= 0 || annualInterestRate <= 0 || timePeriodMonths <= 0) {
            alert("Please enter valid positive numbers for all fields.");
            return;
        }

        const monthlyInterestRate = annualInterestRate / 12 / 100;
        let maturityAmount = 0;

        for (let i = 0; i < timePeriodMonths; i++) {
            maturityAmount += monthlyInstallment * Math.pow((1 + monthlyInterestRate), (timePeriodMonths - i)); 
        }

        const totalInvestAmount = monthlyInstallment * timePeriodMonths;
        const interestEarned = maturityAmount - totalInvestAmount;

        document.getElementById("interestEarned1").innerText = `₹${interestEarned.toFixed(2)}`;
        document.getElementById("maturityAmount1").innerText = `₹${maturityAmount.toFixed(2)}`;
    });

    document.getElementById("clearBtn2").addEventListener("click", function() {
        document.getElementById("monthly-installment").value = '';
        document.getElementById("rate1").value = '';
        document.getElementById("months1").value = '';
        document.getElementById("interestEarned1").innerText = '';
        document.getElementById("maturityAmount1").innerText = '';
    });
});
