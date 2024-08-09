let cashFlowCount = 0;

function addCashFlow() {
    cashFlowCount++;
    const cashFlowsDiv = document.getElementById('cashFlows');
    const newCashFlow = document.createElement('div');
    newCashFlow.className = 'cash-flow-item';
    newCashFlow.innerHTML = `
        <label for="cashFlow${cashFlowCount}">Year ${cashFlowCount} : <br> ₹</label>
        <input class="form-control" id="cashFlow${cashFlowCount}" type="number"/>
        <button type="button" onclick="removeCashFlow(this); cashFlowCount--;">x</button>
    `;
    cashFlowsDiv.appendChild(newCashFlow);
}

function removeCashFlow(button) {
    const cashFlowItem = button.parentElement;
    cashFlowItem.remove();
}

function calculateNPV() {
    const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
    const discountRate = parseFloat(document.getElementById('discountRate').value) / 100;
    const cashFlowItems = document.querySelectorAll('.cash-flow-item input');

    if (isNaN(initialInvestment) || isNaN(discountRate)) {
        alert('Please enter valid inputs.');
        return;
    }

    let npv = -initialInvestment;
    cashFlowItems.forEach((input, index) => {
        const cashFlow = parseFloat(input.value);
        if (isNaN(cashFlow)) {
            alert('Please enter valid cash flow values.');
            return;
        }
        npv += cashFlow / Math.pow(1 + discountRate, index + 1);
    });

    document.getElementById('npvResult').textContent = npv.toFixed(2);
}

function clearNPV() {
    document.getElementById('initialInvestment').value = '';
    document.getElementById('discountRate').value = '';
    document.getElementById('cashFlows').innerHTML = '';
    document.getElementById('npvResult').innerText = '';
  }
  
  function addCashFlow() {
    const cashFlowsContainer = document.getElementById('cashFlows');
    const year = cashFlowsContainer.children.length + 1;
    const cashFlowInput = document.createElement('div');
    cashFlowInput.innerHTML = `
      <div>
        <b>Year ${year} Cash Flow (INR)</b>
        <input class="form-control" type="number" name="cashFlow" />
        <button type="button" onclick="removeCashFlow(this)">Remove</button>
      </div>
      <br />
    `;
    cashFlowsContainer.appendChild(cashFlowInput);
  }
  
  function removeCashFlow(button) {
    const cashFlowDiv = button.parentElement;
    cashFlowDiv.parentElement.removeChild(cashFlowDiv);
  }
  
  function calculateNPV() {
    const initialInvestment = parseFloat(document.getElementById('initialInvestment').value);
    const discountRate = parseFloat(document.getElementById('discountRate').value) / 100;
    const cashFlowElements = document.getElementsByName('cashFlow');
    let npv = -initialInvestment;
  
    cashFlowElements.forEach((element, index) => {
      const cashFlow = parseFloat(element.value);
      npv += cashFlow / Math.pow(1 + discountRate, index + 1);
    });
  
    document.getElementById('npvResult').innerText = npv.toFixed(2);
  }
  