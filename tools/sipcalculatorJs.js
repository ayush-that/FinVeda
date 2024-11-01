const calculateResult = () => {
    const amountValue = document.getElementById("investment").value.replace(" Rs", "");
    const amount = parseInt(amountValue.split(",").join(""));

    // Validate amount input
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid positive investment amount.");
        document.getElementById("investment").focus();
        return;
    }
    document.getElementById("input-1").innerHTML = amount;

    const years = document.getElementById("years").value;

    // Validate years input
    if (years.length === 0 || isNaN(years) || years <= 0) {
        alert("Please enter a valid positive number of years.");
        document.getElementById("years").focus();
        return;
    }
    document.getElementById("input-2").innerHTML = years;

    const returnRateValue = document.getElementById("return-rate").value.replace(" %", "");
    const returnRate = parseInt(returnRateValue.split(",").join(""));

    // Validate return rate input
    if (isNaN(returnRate) || returnRate <= 0) {
        alert("Please enter a valid positive return rate.");
        document.getElementById("return-rate").focus();
        return;
    }
    document.getElementById("input-3").innerHTML = returnRate;

    const selectedOption = document.querySelector("input[name='checked']:checked");
    if (!selectedOption) {
        alert("Please select a calculation mode.");
        return;
    }

    const mode = selectedOption.value;
    let wealthGained = 0;
    let total = 0;
    let maturityValue = 0;

    if (mode === "Monthly") {
        wealthGained = Math.round(
            ((Math.pow(1 + (Math.pow(1 + returnRate / 100, 1 / 12) - 1), years * 12) -
            1) /
            (Math.pow(1 + returnRate / 100, 1 / 12) - 1)) *
            amount
        );
        total = amount * 12 * years;
    } else {
        total = amount;
        wealthGained = Math.round(Math.pow(1 + returnRate / 100, years) * amount);
    }

    maturityValue = wealthGained - total;

    // Format numbers with commas
    document.getElementById("total").innerHTML = formatNumber(total);
    document.getElementById("wealth-gained").innerHTML = formatNumber(wealthGained);
    document.getElementById("maturity-value").innerHTML = formatNumber(maturityValue);

    // Reset fields
    document.getElementById("investment").value = "";
    document.getElementById("years").value = "";
    document.getElementById("return-rate").value = "";
};

const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.querySelector('.select');
    if (selectElement) {
        selectElement.addEventListener('click', function() {
            this.classList.toggle('clicked');
            document.querySelector('.menu').classList.toggle('open');
        });
    }

    const currencyOptions = document.querySelectorAll('.currency-option');
    if (currencyOptions) {
        currencyOptions.forEach(option => {
            option.addEventListener('click', function() {
                const selected = document.querySelector('.selected');
                selected.innerHTML = this.innerHTML;
                document.querySelector('.menu').classList.remove('open');
                document.querySelector('.select').classList.remove('clicked');
            });
        });
    }

    const knowMoreBtns = document.querySelectorAll(".know-more-btn");
    knowMoreBtns.forEach(button => {
        button.addEventListener("click", function () {
            const knowMoreContent = this.nextElementSibling;
            knowMoreContent.classList.toggle("show");
        });
    });
});

const commas = () => {
    let amount = document.getElementById("investment").value;
    amount = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("investment").value = amount.includes("Rs") ? amount : `${amount} Rs`;
};

const percentage = () => {
    let value = document.getElementById("return-rate").value;
    if (!value.includes("%")) {
        document.getElementById("return-rate").value = `${value} %`;
    }
};

const clearAll = () => {
    document.getElementById('loanAmount').value = '';
    document.getElementById('interestRate').value = '';
    document.getElementById('loanTenure').value = '';
    document.getElementById('monthlyEMI').innerText = '';
    document.getElementById('totalPayment').innerText = '';
    document.getElementById('totalInterestPaid').innerText = '';
};
