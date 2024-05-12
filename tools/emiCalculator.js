function calculateEMI() {
    // Retrieve input values
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var loanTenure = parseFloat(document.getElementById('loanTenure').value);

    // Calculate monthly interest rate
    var monthlyInterestRate = (interestRate / 12) / 100;

    // Calculate EMI
    var emi = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure) / (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);

    // Calculate total payment
    var totalPayment = emi * loanTenure;

    // Calculate total interest paid
    var totalInterestPaid = totalPayment - loanAmount;

    // Display results
    document.getElementById('monthlyEMI').textContent = 'INR ' + emi.toFixed(2);
    document.getElementById('totalPayment').textContent = 'INR ' + totalPayment.toFixed(2);
    document.getElementById('totalInterestPaid').textContent = 'INR ' + totalInterestPaid.toFixed(2);
};

validateLoan = (x) => {
    let loan = document.getElementById("loanAmount");
    let tenure = document.getElementById("loanTenure");
    let rate = document.getElementById("interestRate");
    if(isNaN(loan.value) || loan.value < 0){
      alert("The Loan Amount is invalid.")
      loan.style.borderColor="red";
      loan.style.borderWidth="2px";
      document.getElementById("calculateE").disabled=true;
    }
    else{
      loan.style.borderColor="#000000";
      loan.style.borderWidth="1px";
      if(!isNaN(rate.value) && !isNaN(tenure.value) && !isNaN(loan.value)){
        document.getElementById("calculateE").disabled=false;
      }
    }
  };

  validateRate = (x) => {
    let loan = document.getElementById("loanAmount");
    let tenure = document.getElementById("loanTenure");
    let rate = document.getElementById("interestRate");
    if(isNaN(rate.value) || rate.value < 0){
      alert("The Interest Rate is invalid.")
      rate.style.borderColor="red";
      rate.style.borderWidth="2px";
      document.getElementById("calculateE").disabled=true;
    }
    else{
      rate.style.borderColor="#000000";
      rate.style.borderWidth="1px";
      if(!isNaN(rate.value) && !isNaN(tenure.value) && !isNaN(loan.value)){
        document.getElementById("calculateE").disabled=false;
      }
    }
  };

  validateTenure = (x) => {
    let loan = document.getElementById("loanAmount");
    let tenure = document.getElementById("loanTenure");
    let rate = document.getElementById("interestRate");
    if(isNaN(tenure.value) || tenure.value < 0){
      alert("The Loan Tenure is invalid.")
      tenure.style.borderColor="red";
      tenure.style.borderWidth="2px";
      document.getElementById("calculateE").disabled=true;
    }
    else{
      tenure.style.borderColor="#000000";
      tenure.style.borderWidth="1px";
      if(!isNaN(rate.value) && !isNaN(tenure.value) && !isNaN(loan.value)){
        document.getElementById("calculateE").disabled=false;
      }
    }
  };  