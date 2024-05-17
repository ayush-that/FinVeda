calculateResult = () => {
  let amount = document.getElementById("investment").value;
  let years = document.getElementById("years").value;
  let returnRate = document.getElementById("return-rate").value;

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

    amount = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("investment").value = amount
      .concat(" Rs");
    document.getElementById("years").value = years
      .concat(" Yrs")  
    document.getElementById("return-rate").value = returnRate
      .concat(" %");
};

currencyChange = () => {
  let selectedValue = currency.value;
  document.getElementById("currency-change-1").innerHTML = selectedValue;
  document.getElementById("currency-change-2").innerHTML = selectedValue;
  document.getElementById("currency-change-3").innerHTML = selectedValue;
};

validateAmount = (x) => {
  let amount = document.getElementById("investment");
  let returnRate = document.getElementById("return-rate");
  let timeY = document.getElementById("years");
  if(isNaN(amount.value) || amount.value <0){
    alert("The Investment Amount is invalid.")
    amount.style.borderColor="red";
    amount.style.borderWidth="2px";
    document.getElementById("calculateButton").disabled=true;
  }
  else{
    amount.style.borderColor="#000000";
    amount.style.borderWidth="1px";
    if(isFinite(amount.value) && isFinite(returnRate.value) && isFinite(timeY.value)){
      document.getElementById("calculateButton").disabled=false;
    }
  }
};

validateReturnRate = (x) => {
  let amount = document.getElementById("investment");
  let returnRate = document.getElementById("return-rate");
  let timeY = document.getElementById("years");
  if(isNaN(returnRate.value) || returnRate.value < 0){
    alert("The Return Rate is invalid.")
    returnRate.style.borderColor="red";
    returnRate.style.borderWidth="2px";
    document.getElementById("calculateButton").disabled=true;
  }
  else{
    returnRate.style.borderColor="#000000";
    returnRate.style.borderWidth="1px";
    if(isFinite(amount.value) && isFinite(returnRate.value) && isFinite(timeY.value)){
      document.getElementById("calculateEButton").disabled=false;
    }
  }
};

validateTime = (x) => {
  let amount = document.getElementById("investment");
  let returnRate = document.getElementById("return-rate");
  let timeY = document.getElementById("years");
  if(isNaN(timeY.value) || timeY.value < 0){
    alert("The Time is invalid.");
    timeY.style.borderColor="red";
    timeY.style.borderWidth="2px";
    document.getElementById("calculateButton").disabled=true;
  }
  else{
    timeY.style.borderColor="#000000";
    timeY.style.borderWidth="1px";
    if(isFinite(amount.value) && isFinite(returnRate.value) && isFinite(timeY.value)){
      document.getElementById("calculateButton").disabled=false;
    }  }
};