document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateBtn').addEventListener('click', calculateInsurance);
    document.getElementById('clearBtn').addEventListener('click', clearInsurance);
});

function calculateInsurance() {
    const sumAssured = parseFloat(document.getElementById('Sumassured').value);
    const policyTerm = parseFloat(document.getElementById('Policyterm').value);
    const annualPremium = parseFloat(document.getElementById('Annualpremium').value) / 100;
    const reversionaryBonus = parseFloat(document.getElementById('ReversionaryBonus').value) / 100;
    const terminalBonus = parseFloat(document.getElementById('TerminalBonus').value) / 100;

    if (isNaN(sumAssured) || isNaN(policyTerm) || isNaN(annualPremium) || 
        isNaN(reversionaryBonus) || isNaN(terminalBonus) || 
        sumAssured <= 0 || policyTerm <= 0 || annualPremium < 0 || 
        reversionaryBonus < 0 || terminalBonus < 0) {
        alert('Please enter valid positive numbers for all fields.');
        return;
    }

    const surrenderType = document.querySelector('input[name="surrenderType"]:checked');
    if (!surrenderType) {
        alert('Please select a surrender type.');
        return;
    }

    const type = surrenderType.id;

    let reversionaryBonusAmt, terminalBonusAmt, totalBonus, totalPremium, netGain;

    if (type === 'surrendered') {
        reversionaryBonusAmt = (sumAssured * reversionaryBonus * policyTerm).toFixed(2);
        terminalBonusAmt = 0;
        totalBonus = reversionaryBonusAmt;
    } else if (type === 'death') {
        reversionaryBonusAmt = (sumAssured * reversionaryBonus * policyTerm).toFixed(2);
        terminalBonusAmt = (sumAssured * terminalBonus).toFixed(2);
        totalBonus = (parseFloat(reversionaryBonusAmt) + parseFloat(terminalBonusAmt)).toFixed(2);
    }

    totalPremium = (sumAssured * annualPremium * policyTerm).toFixed(2);
    netGain = (parseFloat(totalBonus) - parseFloat(totalPremium)).toFixed(2);

    document.getElementById('ReversionaryBonusAmt').textContent = `Reversionary Bonus Amount: ₹${reversionaryBonusAmt}`;
    document.getElementById('TerminalBonusAmt').textContent = `Terminal Bonus Amount: ₹${terminalBonusAmt}`;
    document.getElementById('TotalBonus').textContent = `Total Bonus: ₹${totalBonus}`;
    document.getElementById('TotalPremium').textContent = `Total Premium: ₹${totalPremium}`;
    document.getElementById('netGain').textContent = `Net Gain: ₹${netGain}`;
}

function clearInsurance() {
    document.getElementById('Sumassured').value = '';
    document.getElementById('Policyterm').value = '';
    document.getElementById('Annualpremium').value = '';
    document.getElementById('ReversionaryBonus').value = '';
    document.getElementById('TerminalBonus').value = '';
  
    document.getElementById('ReversionaryBonusAmt').textContent = '';
    document.getElementById('TerminalBonusAmt').textContent = '';
    document.getElementById('TotalBonus').textContent = '';
    document.getElementById('TotalPremium').textContent = '';
    document.getElementById('netGain').textContent = '';

    const checkedRadio = document.querySelector('input[name="surrenderType"]:checked');
    if (checkedRadio) {
        checkedRadio.checked = false;
    }
}
