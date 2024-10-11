calculateResult = () => {
  let amountValue = document.getElementById("investment").value;
  let amountWithComma = amountValue.split(" ")[0];
  let amount = parseInt(amountWithComma.split(",").join(""));

  // Validate amount input
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid positive investment amount.");
    document.getElementById("investment").focus();
    return;
  }

  document.getElementById("input-1").innerHTML = amount;

  let years = document.getElementById("years").value;

  // Validate years input
  if (years.length === 0 || isNaN(years) || years <= 0) {
    alert("Please enter a valid positive number of years.");
    document.getElementById("years").focus();
    return;
  }

  document.getElementById("input-2").innerHTML = years;

  let returnRateValue = document.getElementById("return-rate").value;
  let returnRateWithComma = returnRateValue.split(" ")[0];
  let returnRate = parseInt(returnRateWithComma.split(",").join(""));

  // Validate return rate input
  if (isNaN(returnRate) || returnRate <= 0) {
    alert("Please enter a valid positive return rate.");
    document.getElementById("return-rate").focus();
    return;
  }

  document.getElementById("input-3").innerHTML = returnRate;

  let checkedValue = document.getElementsByName("checked")[0].checked;
  let wealthGained = 0;
  total = 0;
  maturityValue = 0;

  if (document.getElementsByName("checked")[0].checked) {
    document.getElementById("mode-1").innerHTML =
      document.getElementsByName("checked")[0].value;
    document.getElementById("mode-2").innerHTML =
      document.getElementsByName("checked")[0].value;
    document.getElementById("mode-3").innerHTML =
      document.getElementsByName("checked")[0].value;
  }
  if (document.getElementsByName("checked")[1].checked) {
    document.getElementById("mode-1").innerHTML =
      document.getElementsByName("checked")[1].value;
    document.getElementById("mode-2").innerHTML =
      document.getElementsByName("checked")[1].value;
    document.getElementById("mode-3").innerHTML =
      document.getElementsByName("checked")[1].value;
  }
  if (checkedValue) {
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
  total = total.toString();
  total = total.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  wealthGained = wealthGained.toString();
  wealthGained = wealthGained.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  maturityValue = maturityValue.toString();
  maturityValue = maturityValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById("investment").value = "";
  document.getElementById("years").value = "";
  document.getElementById("return-rate").value = "";
  console.log(total, typeof total);
  document.getElementById("total").innerHTML = total === "NaN" ? "0" : total;
  document.getElementById("wealth-gained").innerHTML =
    wealthGained === "NaN" ? "0" : wealthGained;
  document.getElementById("maturity-value").innerHTML =
    maturityValue === "NaN" ? "0" : maturityValue;
};

document.addEventListener("DOMContentLoaded", function() {
  // Toggle the dropdown menu when the .select element is clicked
  const selectElement = document.querySelector('.select');
  
  if (selectElement) {  // Ensure that the .select element exists
    selectElement.addEventListener('click', function() {
      this.classList.toggle('clicked');  // Add/remove the 'clicked' class to change border color
      document.querySelector('.menu').classList.toggle('open');  // Show/hide the menu
    });
  }

  // Update the selected currency and close the dropdown menu when an option is clicked
  const currencyOptions = document.querySelectorAll('.currency-option');
  
  if (currencyOptions) {
    currencyOptions.forEach(option => {
      option.addEventListener('click', function() {
        const selected = document.querySelector('.selected');  // Find the .selected span
        selected.innerHTML = this.innerHTML;  // Update the .selected span with the clicked option
        document.querySelector('.menu').classList.remove('open');  // Close the menu
        document.querySelector('.select').classList.remove('clicked');  // Reset the select border color
      });
    });
  }
});


commas = (x) => {
  let amount = document.getElementById("investment").value;
  let temp = amount.split(" ");
  if (temp.includes("Rs")) {
    amount = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    amount = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("investment").value = amount
      .concat(" ")
      .concat("Rs");
  }
};

percentage = (x) => {
  let value = document.getElementById("return-rate").value;
  let temp = value.split(" ");
  if (temp.length < 2)
    document.getElementById("return-rate").value = value
      .concat(" ")
      .concat("%");
};

//for know more button
document.addEventListener("DOMContentLoaded", function () {
  const knowMoreBtns = document.querySelectorAll(".know-more-btn");

  knowMoreBtns.forEach((button) => {
    button.addEventListener("click", function () {
      const knowMoreContent = this.nextElementSibling;
      knowMoreContent.classList.toggle("show");
    });
  });
});
function clearAll() {
  document.getElementById('investment').value = '';
  document.getElementById('years').value = '';
  document.getElementById('return-rate').value = '';
  document.getElementById('total').innerText = '';
  document.getElementById('wealth-gained').innerText = '';
  document.getElementById('maturity-value').innerText = '';
  document.getElementById('input-1').innerText = '';
  document.getElementById('input-2').innerText = '';
  document.getElementById('input-3').innerText = '';
}
